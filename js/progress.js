/* Foydalanuvchi yutuqlari: qalqon testlari natijalari (faqat shu qurilmada, brauzer xotirasida saqlanadi). */
(function () {
  "use strict";
  const TTY = window.TTY;
  const { store } = TTY;

  const KEY = "progress";
  const all = () => store.get(KEY, {});

  TTY.progress = {
    all,
    /** Test natijasini yozadi (eng yaxshi natija saqlanadi) */
    record(key, correct, total) {
      const p = all();
      const percent = Math.round((correct / total) * 100);
      const prev = p[key];
      if (!prev || percent >= prev.best) p[key] = { best: percent, correct, total, ts: Date.now() };
      else p[key] = { ...prev, tries: (prev.tries || 1) + 1 };
      store.set(KEY, p);
      return p[key];
    },
    best(key) { const r = all()[key]; return r ? r.best : null; },
    passed(key) { const b = this.best(key); return b != null && b >= TTY.config.passScore; },
    /** 11 ta qalqon testidan nechtasi topshirilgan */
    shieldsPassed() { return TTY.data.shieldQuizKeys.filter((k) => this.passed(k)).length; },
    shieldsTotal() { return TTY.data.shieldQuizKeys.length; },
    allShieldsPassed() { return this.shieldsPassed() === this.shieldsTotal(); },
    /** Barcha qalqon testlarining o'rtacha eng yaxshi natijasi, foizda */
    average() {
      const keys = TTY.data.shieldQuizKeys;
      const vals = keys.map((k) => this.best(k)).filter((v) => v != null);
      return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;
    },
    reset() { store.set(KEY, {}); }
  };
})();
