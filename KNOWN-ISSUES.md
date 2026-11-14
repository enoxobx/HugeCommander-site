---
title: Problemi noti
alt: /KNOWN-ISSUES#english
---
# HugeCommander — Problemi noti / Known issues

Ultimo aggiornamento / Last updated: 14/11/2026 (versione / version 0.1.5)

- [Italiano](#italiano)
- [English](#english)

---

## Italiano

**«Annulla» non interrompe la copia di un singolo file grande.** Copiando o
spostando un solo file molto grande (per esempio diversi GB su una chiavetta),
«Annulla» aspetta che quel file sia copiato per intero prima di fermarsi.
Con molti file, invece, si ferma al file successivo. Correzione prevista.

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

**"Cancel" does not stop the copy of a single large file.** When copying or
moving one very large file (for example several GB to a USB stick), "Cancel"
waits until that file is fully copied before stopping. With many files it
stops at the next file. A fix is planned.

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
