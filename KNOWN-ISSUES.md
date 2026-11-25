---
title: Problemi noti
alt: /KNOWN-ISSUES#english
---
# HugeCommander — Problemi noti / Known issues

Ultimo aggiornamento / Last updated: 25/11/2026 (versione / version 0.1.8)

- [Italiano](#italiano)
- [English](#english)

---

## Italiano

**Git: la lettera di stato non segue i comandi dati fuori.** Dopo un
`git add` o un `git commit` dati da un terminale, la lettera accanto ai file
resta quella di prima finché la cartella non viene ricaricata (Ctrl+R).

**Lettore di schede USB: espellere la scheda toglie il lettore.** Con un
lettore di schede collegato via USB, «Rimuovi in sicurezza» sulla scheda
scollega l'intero lettore, come fa la «Rimozione sicura dell'hardware» di
Windows: per usarlo di nuovo va ricollegato. In valutazione.

**Cartelle di rete con credenziali diverse: corretto nella 0.1.8.** Il commander ora chiede nome utente e password nella sua finestra e supera il limite di Windows di un solo utente per server. Se succede ancora, segnalalo.

Per segnalare un problema: «Segnala un problema» nelle impostazioni del
programma (Ctrl+,).

---

## English

**Git: the status letter does not follow commands run elsewhere.** After a
`git add` or `git commit` run in a terminal, the letter next to the files stays
as it was until the folder is reloaded (Ctrl+R).

**USB card reader: ejecting the card removes the reader.** With a card reader
connected over USB, "Safely remove" on the card disconnects the whole reader,
as Windows' "Safely Remove Hardware" does: plug it in again to use it. Under
evaluation.

**Network folders with different credentials: fixed in 0.1.8.** The commander now asks for user name and password in its own window and gets past Windows' one-user-per-server limit. If it still happens, please report it.

To report a problem: "Report a problem" in the program's settings (Ctrl+,).
