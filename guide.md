---
title: Guide
lang: en
toc: true
alt: /guida
---
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
- In a git repository, each name shows the letter of `git status`: M modified,
  U untracked, A added, R renamed, D deleted, ! conflict; a folder with changes
  inside gets a dot, ignored files are greyed. The pane header shows the
  branch (↑ commits to push, ↓ to pull, ● files changed), the status bar the
  last commit of the selected file. Alt+Shift+D compares the file with the
  last commit; in the F3 viewer, Alt+B shows who wrote each line and when.
  Needs git installed.

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
- **Right-click**, Shift+F10 or the Menu key: the program's menu with the
  commands that apply to the selection, each with its key; at the bottom
  "More Windows options…" opens the Windows menu (Shift+right-click opens it
  directly). Shift+Enter: "Open with".
- **Key bar** at the bottom: F3 View, F4 Edit, F5 Copy, F6 Move, F7 New
  folder, F8 Delete, Alt+F7 Search, also with a click. Turn it off in
  Settings › Panes.
- **Command palette (Ctrl+Shift+P)** and the "…" button in the top bar: every
  command by name, with its key; type to search, Enter runs it.

## Folder comparison and synchronization

- **Shift+F2** compares the two folders across the whole tree. Colors: purple
  on one side only, green newer, gray older, orange different. A second
  Shift+F2 shows only the differences, a third turns the comparison off.
- **Aligned rows:** as in Beyond Compare, the same file sits on the same row
  in both panes; where it is missing on one side there is a hatched empty row.
  Both sides scroll together.
- **Criteria:** the active criteria are shown above the panes; a click on one
  turns it on or off and compares again. "Options…" or Ctrl+Shift+F2 opens
  all of them (date, size, content, filters).
- **Ctrl+Shift+Y:** browsing moves together on both sides.
- **Ctrl+Shift+→ / ←:** copy the selection to the right or to the left.
- **Ctrl+Shift+F5:** synchronize, with a list of every copy and its direction
  (Tab changes the direction for all, Space for one row). It deletes nothing;
  Ctrl+Z removes what it created.

With more than two panes, the app first asks which two to compare.

## Comparing and merging files

- **Ctrl+Shift+D** compares two text files (one per pane, or two marked). Jump
  between differences with F7 and F8 or ◀ ▶. The arrows next to each block
  copy it; Enter, F2 or a double click edits the line, Tab (or a click on the
  file name) switches side, Ctrl+S saves, Ctrl+Z undoes.
  Alt+1 all lines, Alt+2 only differences, Alt+3 only identical lines, Alt+4
  ignores minor differences (spaces, empty lines).
- **Ctrl+Shift+M**, three-way merge (base, mine, theirs): on a file with git
  conflicts, on three marked files, or on two (it asks for the base). For each
  conflict: Ctrl+Shift+← mine, → theirs, ↓ both, ↑ the base. F7 and F8 move
  between conflicts, Ctrl+Z undoes, Ctrl+S saves (only when all are
  resolved), Esc closes. Every command also has its button.

## Editor

F4 opens the file in the built-in editor, also from the F3 viewer at the line
it shows; Shift+F4 opens it with the external editor, chosen in Settings ›
General (Notepad++, VS Code or any program; `%1` in the arguments is the
file). The main commands are also buttons at the top. Ctrl+S saves (keeping
the file's encoding and line breaks), Esc closes and asks whether to save. If
another program changes the file while it is open, it is reloaded on its own
when there are no changes here; with changes a notice asks whether to keep
them or reload.

- **Find:** Ctrl+F (matches light up as you type), F3 and Shift+F3 for next
  and previous; Alt+C matches case, Alt+R uses a regular expression. Ctrl+H
  replaces: Enter one at a time, Ctrl+Alt+Enter all. Ctrl+G goes to a line.
- **Lines:** Ctrl+D duplicates, Alt+↑/↓ moves, Ctrl+Shift+K deletes, Ctrl+/
  comments or uncomments, Tab and Shift+Tab change the indentation.
- **Git:** left of the line numbers a bar marks the lines changed since the
  last commit (green added, orange modified, red where lines are missing).
- Alt+W wraps long lines.

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
- **Filters:** add to the name `ext:pdf` (also `ext:jpg;png`), `size:>100mb`
  (or `<`, `>=`, `1mb..10mb`), `dm:today` (`yesterday`, `thisweek`,
  `thismonth`, `thisyear`, a date such as `2024`, `2024-05`, `12/05/2024`,
  also with `>` `<` `..`), `folder:` or `file:`. Example: `invoice ext:pdf
  dm:thisyear`. The Italian words work too (`dim:`, `oggi`, `cartella:`).
  The "?" button next to the name shows the whole syntax with examples: a
  click adds one.
- **Duplicate files:** type `dupe:` (with other filters if you like, e.g.
  `dupe: ext:jpg size:>1mb`) and press Enter: it finds files with the same
  content, really comparing them. Groups that free the most space come first,
  the oldest file first. Insert marks a file, Ctrl+Shift+A marks every copy
  but the oldest, F8 sends the marked ones to the Recycle Bin (Ctrl+Z brings
  them back).

## Disk usage

Ctrl+Shift+U shows what takes space in the pane's folder: on the left its
folders and files, biggest first, with a bar and the share; on the right the
treemap, where each rectangle is as big as what it weighs and folders show
what is inside them, files coloured by kind. Enter or a double click opens a
folder (or shows the file in its pane), Backspace or "Up" goes up, Esc or
"Close" closes. With
the drive index it opens at once, even for a whole drive.

## Archives, network and favorites

- **Archives:** Enter on a `.zip`, `.7z`, `.tar` or `.tar.gz` opens it like a
  folder, with preview; F5 copies out. Nothing can be written inside an
  archive. Alt+F5 packs: the format follows the name you type (`.zip` unless
  you change it). Alt+F9 extracts. rar files are not supported.
- **Network and NAS:** type `\\server` for the list of shares (Ctrl+L), or
  `\\server\share`. If the server asks you to sign in, the "Network sign-in"
  window appears: user name (`DOMAIN\user` works too) and password;
  "Remember my credentials" saves them in Windows Credential Manager.
  Backspace returns to the list.
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
apply immediately. Ctrl+Shift+L cycles the theme System, Light, Dark.

**Appearance:** choose which theme to use when Windows is light and which when
it is dark. "Edit theme…" changes live every color (interface and syntax,
with a warning when text is hard to read), the fonts, the sizes and the row
height. Your own themes can be created, duplicated, renamed, exported and
imported; "From VS Code…" imports the themes of the installed VS Code. The
"Light" and "Dark" themes are never changed: the first edit makes a copy.

The language follows Windows (Italian or English); change it in the settings, from
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
| Alt+F7 | Search (also `dupe:` for duplicate files) |
| Ctrl+Shift+U | Disk usage |
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
