Italiano: [guida](guida.md)

# HugeCommander — user guide

This guide explains how to use HugeCommander. Each section says what a feature
does and which keys to use. Press F1 at any time to see all shortcuts.

## Getting started

At startup the app reopens your last session: panes, tabs and folders. You work
with two panes side by side. Tab switches between them. F5 copies and F6 moves
to the other pane, F7 creates a folder, F8 or Delete sends to the Recycle Bin.
If you come from Total Commander, your shortcuts are imported automatically.

## Panes, tabs and layouts

Two to four panes, each with its own tabs. Five layouts: Alt+1 single, Alt+2
two side by side, Alt+3 two stacked, Alt+4 one large and two, Alt+5 2×2 grid.
Alt+0 opens the picker. Drag the dividers; double-click one to reset it to the
middle.

- Ctrl+T new tab, Ctrl+W closes it, Ctrl+Tab and Ctrl+Shift+Tab switch tabs.
- Ctrl+U swaps the two panes.
- Ctrl+Shift+S saves the panes' tabs under a name ("Saved tabs" in the sidebar);
  click to reopen them.

## Navigation

- Arrow keys, PgUp, PgDn, Home, End move the selection.
- Enter opens; Backspace or Alt+↑ goes up a folder; Ctrl+\ goes to the drive root.
- Alt+← and Alt+→: back and forward.
- Ctrl+L: go to a path, also `\\server\share`.
- Ctrl+R reloads (usually not needed: lists update by themselves).
- Ctrl+H shows or hides hidden files.
- Ctrl+F3, Ctrl+F4, Ctrl+F5, Ctrl+F6 sort by name, extension, date, size.
- Typing letters filters the list (quick search).

Selection: Space or Insert marks a file, Ctrl+A all, Shift+arrows a range.
Numpad `+`, `-`, `*` select a group (`*.txt`), deselect it, invert the
selection; Esc clears the selection.

## File operations

- **Copy and move (F5, F6):** they run in the background, in a panel at the
  bottom right with progress, speed and time left. You can pause, cancel (files
  already copied stay) and, if something fails, "Retry" repeats only the failed
  files. "In background" closes the panel and leaves a pill in the status bar.
  It never overwrites without asking.
- **Recycle Bin (F8, Delete):** files go to the Recycle Bin, with a confirmation.
- **Rename (F2 or Shift+F6):** selects the name without the extension.
- **Multi-rename (Ctrl+M):** name mask, search and replace (also with a regular
  expression, Alt+R), letter case (Alt+C). The preview shows each new name; with
  a name in red nothing is renamed.
- **Undo (Ctrl+Z):** undoes the last operation (copy, move, rename, recycle,
  new folder), after a confirmation that says what will happen.
- **Copy, cut, paste (Ctrl+C, Ctrl+X, Ctrl+V):** with the Windows clipboard,
  also to and from File Explorer.
- **Folder sizes:** Space on a folder, or Alt+Shift+Enter for all the folders
  shown. The calculation runs in the background.
- **Checksums (Ctrl+Shift+H):** SHA-256, SHA-1 or MD5 (Tab switches). Paste the
  checksum published on a website and the matching file turns green.
- Ctrl+Shift+C copies full paths, Alt+Shift+C only the names.
- Right-click or Shift+F10: the Windows context menu. Shift+Enter: "Open with".

## Folder comparison and synchronization

- **Shift+F2** compares the two folders across the whole tree. Colors: purple
  on one side only, green newer, gray older, orange different. A second
  Shift+F2 shows only the differences.
- **Ctrl+Shift+F2:** comparison criteria (date, size, content, filters).
- **Ctrl+Shift+Y:** browsing moves together on both sides.
- **Ctrl+Shift+→ / ←:** copy the selection to the right or to the left.
- **Ctrl+Shift+F5:** synchronize, with a list of every copy and its direction
  (Tab changes the direction for all, Space for one row). It deletes nothing;
  Ctrl+Z removes what it created.

With more than two panes, the app first asks which two to compare.

## Comparing and merging files

- **Ctrl+Shift+D** compares two text files (one per pane, or two marked). Jump
  between differences with F7 and F8. The arrows next to each block copy it;
  Enter or F2 edits the line, Tab switches side, Ctrl+S saves, Ctrl+Z undoes.
  Alt+1 all lines, Alt+2 only differences, Alt+3 only identical lines, Alt+4
  ignores minor differences (spaces, empty lines).
- **Ctrl+Shift+M**, three-way merge (base, mine, theirs): on a file with git
  conflicts, on three marked files, or on two (it asks for the base). For each
  conflict: Ctrl+Shift+← mine, → theirs, ↓ both, ↑ the base. F7 and F8 move
  between conflicts, Ctrl+S saves (only when all are resolved), Esc closes.

## Preview

- **Ctrl+Q:** preview in the other pane, updated as you move. Ctrl+→ (or a
  click) sends the arrow keys to the preview; Esc, Tab or Ctrl+← go back to the list.
- **F3:** full-window preview. N and P: next and previous file. Esc closes.
- Alt+W wraps long lines. You can view code, CSV, images and binary files
  (hex). In the preview, text can be selected and Ctrl+C copies it.

## Search

- **Alt+F7:** search by name, by text inside files, or both. Tab moves between fields.
- **Instant search:** by name, results arrive as you type, in this folder or on
  all drives (Alt+D or a click). No administrator rights needed. You can turn it
  on or off in the settings.
- **Text search:** each result shows the first matching line. Enter opens the
  file at that line. It skips binary files, files over 32 MB and cloud-only files.

## Zip archives, network and favorites

- **Zip:** Enter on a `.zip` opens it like a folder; F5 copies out. Nothing can be
  written inside an archive. Alt+F5 packs to zip, Alt+F9 extracts.
- **Network:** type `\\server` for the list of shares (Ctrl+L). If needed,
  Windows asks for credentials. Backspace returns to the list.
- **Favorites:** Ctrl+D (1–9 to open, Delete to remove), or the star in the pane header.

## External drives

USB sticks, USB disks and cards appear and disappear by themselves under
"Places", with no restart. Each drive shows its name and free space.

- **Safe removal:** Ctrl+Shift+E on the active pane's drive, or the button that
  appears on the drive when you hover over it. It also works from Windows'
  "Safely Remove Hardware".
- If the drive is in use (by a running operation or another program), it is not
  removed and a notice says so.
- If a drive is removed, the tabs that were on it move to the Home folder.
- Notices appear in a box at the bottom right.

## Shortcuts and legend (F1)

Total Commander shortcuts are imported automatically. F1 opens the legend with
all shortcuts: type to filter by command or key. From the legend, F2 edits them:
click a key to change it, × to remove it, + to add one. "Restore defaults"
undoes all changes.

## Settings, theme and language

**Ctrl+,** opens the settings (also the gear in the toolbar): ↑↓ choose,
Ctrl+↑↓ change section, ← → change the value, Space or Enter toggle. Changes
apply immediately. Ctrl+Shift+L cycles the theme System, Light, Dark. The
language follows Windows (Italian or English); change it in the settings, from
the next start.

## Where your data is

HugeCommander runs on your computer and sends no data. Which files it saves and
where is described in the [privacy policy](privacy.md).

## If the program closes because of an error

The error is written to `crash.log` in the `%APPDATA%\HugeCommander` folder.
The file stays on your computer: attach it yourself, if you wish, when you
report the problem.

## Most used keys

| Key | Action |
|---|---|
| F1 | Shortcut legend |
| Tab | Switch to the other pane |
| F5 / F6 | Copy / move to the other pane |
| F7 | New folder |
| F8, Delete | Recycle Bin |
| F2 | Rename |
| Ctrl+M | Multi-rename |
| Ctrl+Z | Undo last operation |
| Ctrl+Q / F3 | Preview in pane / full window |
| Alt+F7 | Search |
| Shift+F2 | Compare folders |
| Ctrl+Shift+F5 | Synchronize folders |
| Ctrl+Shift+D | Compare files |
| Ctrl+Shift+M | Three-way merge |
| Ctrl+Shift+H | Checksums |
| Ctrl+Shift+E | Safely remove drive |
| Alt+1…5 | Pane layout |
| Ctrl+T / Ctrl+W | New tab / close tab |
| Ctrl+L | Go to a path |
| Ctrl+D | Favorites |
| Ctrl+, | Settings |
