---
title: Problemi noti
alt: /KNOWN-ISSUES#english
---
# HugeCommander — Problemi noti / Known issues

Ultimo aggiornamento / Last updated: 19/11/2026 (versione / version 0.1.7)

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

**Cartelle di rete con credenziali diverse.** Aprendo direttamente dal
commander una cartella di un NAS o di un server che chiede credenziali diverse
da quelle di Windows, può comparire un errore invece della richiesta di
accesso. Soluzione temporanea: aprire la cartella una volta in Esplora file,
poi funziona anche nel commander. Correzione in prova.

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

**Network folders with different credentials.** Opening, directly from the
commander, a folder on a NAS or server that asks for credentials other than
your Windows ones may show an error instead of the sign-in prompt.
Workaround: open the folder once in File Explorer, then it also works in the
commander. A fix is being tested.

To report a problem: "Report a problem" in the program's settings (Ctrl+,).
