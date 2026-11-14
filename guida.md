English: [guide](guide.md)

# HugeCommander — guida per l'utente

Questa guida spiega come usare HugeCommander. In ogni sezione trovi cosa fa e
con quali tasti. Tutte le scorciatoie si vedono con F1.

## Primi passi

All'avvio si riapre la sessione dell'ultima volta: pannelli, schede e cartelle.
Si lavora con due pannelli affiancati. Tab passa da un pannello all'altro. F5
copia e F6 sposta nell'altro pannello, F7 crea una cartella, F8 o Canc mandano
nel Cestino. Se arrivi da Total Commander, le tue scorciatoie vengono importate
da sole.

## Pannelli, schede e disposizioni

Da due a quattro pannelli, ognuno con le sue schede. Cinque disposizioni:
Alt+1 singolo, Alt+2 due affiancati, Alt+3 due sovrapposti, Alt+4 uno grande e
due, Alt+5 griglia 2×2. Alt+0 apre la scelta. I divisori si trascinano; un
doppio clic li riporta a metà.

- Ctrl+T nuova scheda, Ctrl+W chiude, Ctrl+Tab e Ctrl+Maiusc+Tab cambiano scheda.
- Ctrl+U scambia i due pannelli.
- Ctrl+Maiusc+S salva le schede dei pannelli con un nome («Schede salvate» nella
  barra laterale); un clic le riapre.

## Navigazione

- Frecce, PgSu, PgGiù, Home, Fine muovono la selezione.
- Invio apre; Backspace o Alt+↑ sale di una cartella; Ctrl+\ va alla radice del disco.
- Alt+← e Alt+→: indietro e avanti.
- Ctrl+L: vai a un percorso, anche `\\server\condivisione`.
- Ctrl+R ricarica (di solito non serve: le liste si aggiornano da sole).
- Ctrl+H mostra o nasconde i file nascosti.
- Ctrl+F3, Ctrl+F4, Ctrl+F5, Ctrl+F6 ordinano per nome, estensione, data, dimensione.
- Scrivendo delle lettere si filtra l'elenco (ricerca rapida).

Selezione: Spazio o Ins segnano un file, Ctrl+A tutti, Maiusc+frecce un
intervallo. `+`, `-`, `*` del tastierino numerico selezionano un gruppo
(`*.txt`), lo tolgono, invertono la selezione; Esc toglie la selezione.

## Operazioni sui file

- **Copia e sposta (F5, F6):** vanno in sottofondo, in un pannello in basso a
  destra con avanzamento, velocità e tempo rimasto. Si possono mettere in
  pausa, annullare (i file già copiati restano) e, se qualcosa non riesce,
  «Riprova» ripete solo i file falliti. «In background» chiude il pannello e
  lascia una pillola nella barra di stato. Non sovrascrive mai senza chiedere.
- **Cestino (F8, Canc):** i file vanno nel Cestino, con conferma.
- **Rinomina (F2 o Maiusc+F6):** seleziona il nome senza l'estensione.
- **Rinomina multipla (Ctrl+M):** maschera del nome, cerca e sostituisci (anche
  con espressione regolare, Alt+R), maiuscole (Alt+C). L'anteprima mostra ogni
  nuovo nome; con un nome in rosso non rinomina niente.
- **Annulla (Ctrl+Z):** annulla l'ultima operazione (copia, spostamento,
  rinomina, cestino, nuova cartella), dopo una conferma che dice cosa succede.
- **Copia, taglia, incolla (Ctrl+C, Ctrl+X, Ctrl+V):** con gli appunti di
  Windows, anche da e verso Esplora risorse.
- **Dimensione delle cartelle:** Spazio su una cartella, oppure Alt+Maiusc+Invio
  per tutte quelle mostrate. Il calcolo va in sottofondo.
- **Checksum (Ctrl+Maiusc+H):** SHA-256, SHA-1 o MD5 (Tab cambia). Incollando
  il checksum pubblicato da un sito, il file uguale diventa verde.
- Ctrl+Maiusc+C copia i percorsi completi, Alt+Maiusc+C solo i nomi.
- Clic destro o Maiusc+F10: il menu di Windows. Maiusc+Invio: «Apri con».

## Confronto di cartelle e sincronizzazione

- **Maiusc+F2** confronta le due cartelle su tutto l'albero. Colori: viola
  solo da un lato, verde più recente, grigio più vecchio, arancione diverso. Un
  secondo Maiusc+F2 mostra solo le differenze.
- **Ctrl+Maiusc+F2:** criteri del confronto (data, dimensione, contenuto, filtri).
- **Ctrl+Maiusc+Y:** la navigazione si muove insieme nei due lati.
- **Ctrl+Maiusc+→ / ←:** copia la selezione a destra o a sinistra.
- **Ctrl+Maiusc+F5:** sincronizza, con l'elenco di ogni copia e il suo verso
  (Tab cambia la direzione per tutti, Spazio per una riga). Non cancella niente;
  Ctrl+Z toglie ciò che ha creato.

Con più di due pannelli, il programma chiede prima quali due confrontare.

## Confronto e unione di file

- **Ctrl+Maiusc+D** confronta due file di testo (uno per pannello, o due
  marcati). Le differenze si saltano con F7 e F8. Le frecce accanto a ogni
  blocco lo copiano; Invio o F2 modifica la riga, Tab cambia lato, Ctrl+S salva,
  Ctrl+Z annulla. Alt+1 tutte le righe, Alt+2 solo le differenze, Alt+3 solo
  le uguali, Alt+4 ignora le differenze minori (spazi, righe vuote).
- **Ctrl+Maiusc+M**, unione a 3 vie (base, mio, loro): su un file con i
  conflitti di git, su tre file marcati o su due (chiede la base). Per ogni
  conflitto: Ctrl+Maiusc+← mio, → loro, ↓ entrambi, ↑ la base. F7 e F8 passano
  da un conflitto all'altro, Ctrl+S salva (solo con tutti risolti), Esc chiude.

## Anteprima

- **Ctrl+Q:** anteprima nell'altro pannello, aggiornata mentre ti muovi.
  Ctrl+→ (o un clic) sposta le frecce sull'anteprima; Esc, Tab o Ctrl+← tornano alla lista.
- **F3:** anteprima a tutta finestra. N e P: file successivo e precedente. Esc chiude.
- Alt+W manda a capo le righe lunghe. Si vedono codice, CSV, immagini e file
  binari (esadecimale). Nell'anteprima il testo si seleziona e Ctrl+C lo copia.

## Ricerca

- **Alt+F7:** cerca per nome, per testo dentro i file o per tutti e due. Tab
  passa da un campo all'altro.
- **Ricerca istantanea:** per nome i risultati arrivano mentre scrivi, in questa
  cartella o su tutti i dischi (Alt+D o un clic). Non servono i diritti di
  amministratore. Si attiva e si spegne nelle impostazioni.
- **Ricerca nel testo:** ogni risultato mostra la prima riga trovata. Invio apre
  il file a quella riga. Salta i file binari, quelli oltre 32 MB e quelli solo nel cloud.

## Archivi zip, rete e preferiti

- **Zip:** Invio su un `.zip` lo apre come una cartella; F5 copia fuori. Dentro
  un archivio non si scrive. Alt+F5 comprime in zip, Alt+F9 estrae.
- **Rete:** scrivi `\\server` per l'elenco delle condivisioni (Ctrl+L). Se serve,
  Windows chiede le credenziali. Backspace torna all'elenco.
- **Preferiti:** Ctrl+D (1–9 per aprire, Canc per togliere), oppure la stella
  nell'intestazione del pannello.

## Unità esterne

Chiavette, dischi USB e schede compaiono e spariscono da sole sotto
«Posizioni», senza riavviare. Ogni unità mostra il nome e lo spazio libero.

- **Rimozione sicura:** Ctrl+Maiusc+E sull'unità del pannello attivo, oppure il
  pulsante che compare sull'unità passandoci sopra con il mouse. Funziona anche
  dalla «Rimozione sicura dell'hardware» di Windows.
- Se l'unità è in uso (da un'operazione in corso o da un altro programma), non
  viene rimossa e un avviso lo dice.
- Se un'unità viene tolta, le schede che erano su di essa passano alla cartella Home.
- Gli avvisi compaiono in un riquadro in basso a destra.

## Scorciatoie e legenda (F1)

Le scorciatoie di Total Commander vengono importate da sole. F1 apre la legenda
con tutte le scorciatoie: scrivendo si filtra per comando o per tasto. Dalla
legenda, F2 le modifica: clic su un tasto per cambiarlo, × per toglierlo, + per
aggiungerne uno. «Ripristina predefinite» annulla le modifiche.

## Impostazioni, tema e lingua

**Ctrl+,** apre le impostazioni (anche l'ingranaggio nella barra): ↑↓ scelgono,
Ctrl+↑↓ cambiano sezione, ← → cambiano il valore, Spazio o Invio attivano. Le
modifiche valgono subito. Ctrl+Maiusc+L passa da tema Sistema a Chiaro a Scuro.
La lingua segue Windows (italiano o inglese); si cambia nelle impostazioni, dal
prossimo avvio.

## Dove sono i dati

HugeCommander funziona sul tuo computer e non invia dati. Quali file salva e
dove è scritto nell'[informativa sulla privacy](privacy.md).

## Se il programma si chiude per un errore

L'errore viene scritto in `crash.log`, nella cartella `%APPDATA%\HugeCommander`.
Il file resta sul tuo computer: allegalo tu, se vuoi, quando segnali il problema.

## Tasti più usati

| Tasto | Azione |
|---|---|
| F1 | Legenda delle scorciatoie |
| Tab | Passa all'altro pannello |
| F5 / F6 | Copia / sposta nell'altro pannello |
| F7 | Nuova cartella |
| F8, Canc | Cestino |
| F2 | Rinomina |
| Ctrl+M | Rinomina multipla |
| Ctrl+Z | Annulla l'ultima operazione |
| Ctrl+Q / F3 | Anteprima nel pannello / a tutta finestra |
| Alt+F7 | Cerca |
| Maiusc+F2 | Confronta cartelle |
| Ctrl+Maiusc+F5 | Sincronizza cartelle |
| Ctrl+Maiusc+D | Confronta file |
| Ctrl+Maiusc+M | Unione a 3 vie |
| Ctrl+Maiusc+H | Checksum |
| Ctrl+Maiusc+E | Rimozione sicura dell'unità |
| Alt+1…5 | Disposizione dei pannelli |
| Ctrl+T / Ctrl+W | Nuova scheda / chiudi scheda |
| Ctrl+L | Vai a un percorso |
| Ctrl+D | Preferiti |
| Ctrl+, | Impostazioni |
