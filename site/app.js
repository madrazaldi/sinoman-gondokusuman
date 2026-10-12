// Rendering untuk semua halaman. Isi ada di data.js; tiap halaman memilih
// renderer lewat <body data-page="...">.
(() => {
  const ORDER = ["sapen", "purbonegaran", "resonegaran"];
  const KLASTER = ["Medika", "Saintek", "Soshum"];
  const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const params = new URLSearchParams(location.search);
  const countFor = (s) => PROGRAMS.filter((p) => p.s === s).length;
  const kampungParam = () => (ORDER.includes(params.get("kampung")) ? params.get("kampung") : null);

  // ---------- Tema (gelap bawaan, pilihan disimpan) ----------
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const syncToggle = () => toggle.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncToggle();
  });
  syncToggle();

  // ---------- Tanggal ----------
  const day = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const longDate = (iso) => { const d = day(iso); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
  const shortDate = (iso) => { const d = day(iso); return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`; };
  const nowIndex = TIMELINE.findIndex((t) => day(t.from) <= today && today <= day(t.to));
  const upcoming = EVENTS.filter((e) => day(e.date) >= today);

  // ---------- Potongan bersama ----------
  const roster = (s) => `<ul class="roster">${TEAM[s].map((m) =>
    `<li><b>${esc(m.name)}</b><span>${esc(m.prodi)}${m.role ? `, ${esc(m.role)}` : ""}</span></li>`).join("")}</ul>`;

  // Kelompokkan per kampung, lalu per payung program (Resonegaran) atau per orang.
  function programGroups(rows, showKampung) {
    const groups = [];
    for (const s of ORDER) {
      const inS = rows.filter((p) => p.s === s);
      for (const key of new Set(inS.map((p) => p.g || p.p))) {
        const items = inS.filter((p) => (p.g || p.p) === key);
        groups.push({ s, key, items, byPerson: !items[0].g });
      }
    }
    return groups.map(({ s, key, items, byPerson }) => `
      <div class="group" data-s="${s}">
        <div class="group-head">
          <h3>${esc(byPerson ? `Program ${key}` : key)}</h3>
          <small>${showKampung ? `<span class="swatch" aria-hidden="true"></span>${SUBUNITS[s].name}, ` : ""}${items.length} program</small>
        </div>
        ${items.map((p) => `
          <details class="prog" data-s="${p.s}">
            <summary>
              <span class="p-title">${esc(p.title)}</span>
              <span class="p-for"><span class="sr-only">Untuk </span>${esc(p.t)}</span>
              <span class="p-mark" aria-hidden="true"></span>
            </summary>
            <div class="p-body">
              <p>${esc(p.d)}</p>
              <p class="p-meta">${p.k === "Lintas klaster" ? "Lintas klaster" : `Klaster ${esc(p.k)}`}${byPerson ? "" : `, oleh ${esc(p.p)}`}</p>
            </div>
          </details>`).join("")}
      </div>`).join("");
  }

  const emptyState = `<p class="empty">Tidak ada program yang cocok. Coba kata kunci lain atau <button type="button" data-reset>tampilkan semua program</button>.</p>`;

  // ---------- Beranda ----------
  function renderHome() {
    // Panjang bendera mengikuti panjang nama kampung.
    $("umbul").innerHTML = ORDER.map((s) => {
      const u = SUBUNITS[s];
      return `<li><a class="flag" data-s="${s}" href="kampung.html?kampung=${s}" style="--len: ${300 + u.name.length * 24}px">
        <span class="flag-count">${countFor(s)} program</span>
        <span class="flag-text"><b>${u.name}</b><span>${u.theme}</span></span>
      </a></li>`;
    }).join("");

    $("trio").innerHTML = ORDER.map((s) => {
      const u = SUBUNITS[s];
      return `<li data-s="${s}">
        <h3><a href="kampung.html?kampung=${s}">${u.name}</a></h3>
        <p class="trio-theme">${u.theme}</p>
        <p class="trio-where">${u.kelurahan}</p>
        <p class="trio-lead">${esc(u.lead)}</p>
        <ul class="focus" aria-label="Fokus ${u.name}">${u.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <a class="more" href="kampung.html?kampung=${s}">Lihat ${countFor(s)} program di ${u.name}</a>
      </li>`;
    }).join("");

    const first = TIMELINE[0];
    const last = TIMELINE[TIMELINE.length - 1];
    let big, text;
    if (today < day(first.from)) {
      const n = Math.round((day(first.from) - today) / 864e5);
      big = n === 1 ? "Besok" : `${n} hari lagi`;
      text = `Penerjunan ke kampung pada ${longDate(first.from)}.`;
    } else if (today > day(last.to)) {
      big = "Selesai";
      text = `KKN berakhir pada ${longDate(last.to)}. Terima kasih, warga Gondokusuman.`;
    } else {
      const t = TIMELINE[Math.max(nowIndex, 0)];
      big = t.title;
      text = t.text;
    }
    $("now").innerHTML = `
      <h2>Linimasa</h2>
      <p class="now-big display">${esc(big)}</p>
      <p class="now-text">${esc(text)}</p>
      ${upcoming.length ? `<ul class="agenda" aria-label="Agenda terdekat">${upcoming.slice(0, 3).map((e) => `
        <li data-s="${e.s}"><time datetime="${e.date}">${shortDate(e.date)}</time><span><b>${esc(e.title)}</b>. ${esc(e.text)}</span></li>`).join("")}</ul>` : ""}
      <a class="more" href="tentang.html#linimasa">Lihat linimasa lengkap</a>`;
  }

  // ---------- Halaman kampung ----------
  function renderKampung() {
    const s = kampungParam() || ORDER[0];
    const u = SUBUNITS[s];
    document.title = `${u.name}, ${u.theme} | Sinoman Gondokusuman`;
    document.body.dataset.s = s;

    $("k-head").innerHTML = `
      <div class="wrap">
        <nav class="k-tabs" aria-label="Pilih kampung">${ORDER.map((o) =>
          `<a href="kampung.html?kampung=${o}"${o === s ? ' aria-current="page"' : ""}>${SUBUNITS[o].name}</a>`).join("")}</nav>
        <h1>${u.name}</h1>
        <p class="k-theme">${u.theme}</p>
        <p class="k-where">${u.kelurahan}, Gondokusuman</p>
      </div>`;
    $("k-about").innerHTML = `
      <p class="k-lead">${u.lead}</p>
      <ul class="focus" aria-label="Fokus kegiatan">${u.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`;
    $("k-team").innerHTML = `<h2>Tim ${u.name}</h2>${roster(s)}`;

    const all = PROGRAMS.filter((p) => p.s === s);
    $("k-programs-title").textContent = `${all.length} program di ${u.name}`;
    $("k-all").href = `program.html?kampung=${s}`;

    let klaster = "all";
    const chips = $("k-klaster");
    chips.innerHTML = [["all", "Semua klaster"], ...KLASTER.map((k) => [k, k])].map(([v, label]) =>
      `<button class="chip" type="button" data-value="${v}" aria-pressed="${v === "all"}">${label}</button>`).join("");
    const draw = () => {
      const rows = all.filter((p) => klaster === "all" || p.k === klaster);
      $("k-list").innerHTML = rows.length ? programGroups(rows, false) : emptyState;
    };
    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      klaster = b.dataset.value;
      chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      draw();
    });
    draw();
  }

  // ---------- Penjelajah program ----------
  function renderProgram() {
    const state = {
      s: kampungParam() || "all",
      k: KLASTER.includes(params.get("klaster")) ? params.get("klaster") : "all",
      q: (params.get("q") || "").trim().toLowerCase(),
    };
    const q = $("q");
    q.value = params.get("q") || "";

    const opt = (kind, value, label, n, s) =>
      `<button class="opt" type="button" data-filter="${kind}" data-value="${value}"${s ? ` data-s="${s}"` : ""}><i aria-hidden="true"></i>${label}<small>${n}</small></button>`;
    $("f-kampung").innerHTML = opt("s", "all", "Semua kampung", PROGRAMS.length) +
      ORDER.map((s) => opt("s", s, SUBUNITS[s].name, countFor(s), s)).join("");
    $("f-klaster").innerHTML = opt("k", "all", "Semua klaster", PROGRAMS.length) +
      KLASTER.map((k) => opt("k", k, k, PROGRAMS.filter((p) => p.k === k).length)).join("");

    const matches = (p) => {
      if (state.s !== "all" && p.s !== state.s) return false;
      if (state.k !== "all" && p.k !== state.k) return false;
      if (!state.q) return true;
      const hay = [p.title, p.d, p.p, p.t, p.g, p.k, SUBUNITS[p.s].name].join(" ").toLowerCase();
      return state.q.split(/\s+/).every((w) => hay.includes(w));
    };

    function draw() {
      document.querySelectorAll(".opt").forEach((b) =>
        b.setAttribute("aria-pressed", String(state[b.dataset.filter] === b.dataset.value)));
      const rows = PROGRAMS.filter(matches);
      $("count").textContent = rows.length === PROGRAMS.length
        ? `Menampilkan semua ${rows.length} program.`
        : `Menampilkan ${rows.length} dari ${PROGRAMS.length} program.`;
      $("programs").innerHTML = rows.length ? programGroups(rows, true) : emptyState;

      const url = new URLSearchParams();
      if (state.s !== "all") url.set("kampung", state.s);
      if (state.k !== "all") url.set("klaster", state.k);
      if (q.value.trim()) url.set("q", q.value.trim());
      history.replaceState(null, "", url.toString() ? `?${url}` : location.pathname);
    }

    document.querySelector(".filters").addEventListener("click", (e) => {
      const b = e.target.closest(".opt");
      if (!b) return;
      state[b.dataset.filter] = b.dataset.value;
      draw();
    });
    q.addEventListener("input", () => { state.q = q.value.trim().toLowerCase(); draw(); });
    $("programs").addEventListener("click", (e) => {
      if (!e.target.closest("[data-reset]")) return;
      Object.assign(state, { s: "all", k: "all", q: "" });
      q.value = "";
      draw();
    });
    draw();
  }

  // ---------- Tentang ----------
  function renderTentang() {
    $("timeline").innerHTML = TIMELINE.map((t, i) => {
      const cls = i === nowIndex ? "is-now" : today > day(t.to) ? "is-past" : "";
      const events = EVENTS.filter((e) => day(t.from) <= day(e.date) && day(e.date) <= day(t.to));
      return `<li class="${cls}">
        <time datetime="${t.from}">${t.date}</time>
        <div>
          <h3>${esc(t.title)}${i === nowIndex ? '<span class="badge">Sedang berjalan</span>' : ""}</h3>
          <p>${esc(t.text)}</p>
          ${events.map((e) => `<p class="t-event" data-s="${e.s}"><b>${longDate(e.date)}: ${esc(e.title)}</b>. ${esc(e.text)}</p>`).join("")}
        </div>
      </li>`;
    }).join("");

    $("team").innerHTML = ORDER.map((s) => `
      <section data-s="${s}" aria-label="Tim ${SUBUNITS[s].name}">
        <h3><a href="kampung.html?kampung=${s}">${SUBUNITS[s].name}</a></h3>
        ${roster(s)}
      </section>`).join("");
  }

  ({ home: renderHome, kampung: renderKampung, program: renderProgram, tentang: renderTentang }[document.body.dataset.page] || (() => {}))();
})();
