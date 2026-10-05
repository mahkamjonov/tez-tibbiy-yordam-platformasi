#!/usr/bin/env bash
# Saytni va admin serverni Contabo VPS ga joylaydi (SSH kalit orqali).
#
#   bash tools/deploy.sh          — sayt + backend
#   bash tools/deploy.sh site     — faqat sayt (index.html, css, js, assets)
#   bash tools/deploy.sh server   — faqat backend + admin panel
#
# Sozlash (ixtiyoriy):  DEPLOY_HOST  (standart: root@169.58.44.8)
#                       DEPLOY_KEY   (standart: ~/.ssh/tezyordam_claude)
#
# Serverdagi .env va data/ (admin kiritgan haqiqiy ma'lumot) HECH QACHON ustidan yozilmaydi.
set -euo pipefail
cd "$(dirname "$0")/.."

HOST="${DEPLOY_HOST:-root@169.58.44.8}"
KEY="${DEPLOY_KEY:-$HOME/.ssh/tezyordam_claude}"
REMOTE=/var/www/tezyordam-admin
WHAT="${1:-all}"

[[ -f "$KEY" ]] || { echo "SSH kalit topilmadi: $KEY" >&2; exit 1; }
ssh_() { ssh -i "$KEY" -o ConnectTimeout=15 "$HOST" "$@"; }
scp_() { scp -q -i "$KEY" "$@"; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [[ "$WHAT" == all || "$WHAT" == site ]]; then
  echo "▸ Sayt tayyorlanmoqda…"
  node tools/prepare-dist.mjs
  tar -czf "$TMP/site.tgz" -C dist .
  scp_ "$TMP/site.tgz" "$HOST:/tmp/tty-site.tgz"
  ssh_ "set -e
    rm -rf $REMOTE/site.new && mkdir -p $REMOTE/site.new
    tar --no-same-owner -xzf /tmp/tty-site.tgz -C $REMOTE/site.new && rm -f /tmp/tty-site.tgz
    rm -rf $REMOTE/site.old
    [ -d $REMOTE/site ] && mv $REMOTE/site $REMOTE/site.old
    mv $REMOTE/site.new $REMOTE/site
    rm -rf $REMOTE/site.old
    echo '  sayt joylandi: $REMOTE/site'"
fi

if [[ "$WHAT" == all || "$WHAT" == server ]]; then
  echo "▸ Backend joylanmoqda…"
  tar --exclude=node_modules --exclude=.env --exclude=data -czf "$TMP/server.tgz" -C server .
  scp_ "$TMP/server.tgz" "$HOST:/tmp/tty-server.tgz"
  ssh_ "set -e
    mkdir -p $REMOTE/server
    tar --no-same-owner -xzf /tmp/tty-server.tgz -C $REMOTE/server && rm -f /tmp/tty-server.tgz
    cd $REMOTE/server && npm install --omit=dev --no-audit --no-fund 2>&1 | tail -2
    pm2 restart tezyordam-admin --update-env >/dev/null && pm2 save >/dev/null
    echo '  backend qayta ishga tushirildi'"
fi

echo "✔ Tayyor."
