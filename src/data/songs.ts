export interface SongItem {
  id: number;
  title: string;
  artist: string;
  audio?: string; // Spotify embed URL if available
  youtube?: string; // YouTube embed URL if available
}

// Centralized list of all released and upcoming songs.
export const allSongs: SongItem[] = [
  { id: 6, title: "CINDERELLA", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/lxI11IGSBiE" },
  { id: 7, title: "I WANT IT ALL", artist: "Aryiion Ft. FADHIL", audio: "", youtube: "https://www.youtube.com/embed/7V-xXnkfvAM" },
  { id: 8, title: "TEDUH", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/Q1ZJDFHkqBs" },
  { id: 9, title: "BEHIND", artist: "Aryiion Ft. Lil-Khai, Yung Uber", audio: "", youtube: "https://www.youtube.com/embed/Hcn0cA2uf0M" },
  { id: 10, title: "PERCAYA", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/J8-wrhG-x90" },
  { id: 12, title: "KENANGAN YANG HILANG", artist: "Aryiiom", audio: "https://open.spotify.com/embed/track/6SZ0nVZU0ZOuayrz2tqBIp" },
  { id: 13, title: "EGO", artist: "Aryiion, Yung Uber", audio: "", youtube: "https://www.youtube.com/embed/Fk8eAOfkaGg" },
  { id: 14, title: "KAU DAN BULAN", artist: "Aryiion", audio: "https://open.spotify.com/embed/track/0PR7gLVNIwp1plbCFTffM0" },
  { id: 15, title: "AKU BUKAN KAMU", artist: "Aryiion, Sobat Ray", audio: "", youtube: "https://www.youtube.com/embed/IRVuo5idp0U" },
  { id: 16, title: "PUTRI", artist: "Aryiion", audio: "https://open.spotify.com/embed/track/753l5jZUQI4uW3EWaCbrLJ" },
  { id: 17, title: "KU HANYA INGIN TAU", artist: "Aryiion, HEILNUAN", audio: "", youtube: "https://www.youtube.com/embed/CQvSdD1BJ1I" },
  { id: 18, title: "PENGEMBARA", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/Qv3-Xj2HB4o" },
  { id: 19, title: "LUPAKAN AKU", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/0XEFpf8JiQ0" },
  { id: 20, title: "LEPASKAN", artist: "Aryiion, Yung Uber, Yonnyboii", audio: "https://open.spotify.com/embed/track/5GsS2jzsPz7bHtP5iA5Lob" },
  { id: 21, title: "SEANDAINYA", artist: "Aryiion", audio: "https://open.spotify.com/embed/track/6SZ0nVZU0ZOuayrz2tqBIp" },
  { id: 22, title: "TAK ADA YANG BERDUKA", artist: "Aryiion, Sobat Ray", audio: "", youtube: "https://www.youtube.com/embed/MT6r1HWIAbE" },
  { id: 23, title: "JATUH CINTA PADAMU", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/b9dmTf507SU" },
  { id: 24, title: "DARI MIMPI", artist: "Aryiion", audio: "", youtube: "https://www.youtube.com/embed/y0gFGSyhrn0" },
];
  

