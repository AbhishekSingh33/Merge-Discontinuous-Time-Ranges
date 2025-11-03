# 🕒 Merge Time Ranges

A simple and efficient Node.js module that merges overlapping or nearly continuous time ranges based on a given threshold.

This utility is especially useful in systems that record active sessions, uptime windows, or event logs with millisecond timestamps — helping you combine overlapping or closely spaced intervals into neat, non-overlapping time ranges.

---

## 🚀 Features

- Merges **overlapping** or **touching** time ranges  
- Treats small **gaps (within threshold)** as continuous  
- Produces **sorted**, **non-overlapping** merged ranges  
- Fully written in **JavaScript (Node.js)** — no external libraries required  
- Clean, modular, and easy to test  

---

## 🧩 Example Problem

Given an array of time ranges representing when a system was active:
```js
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;
