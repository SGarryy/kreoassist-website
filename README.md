# 📡 KreoAssist Website

> **Defy the Blackout. Command the Grid.**

The official landing page for **KreoAssist**—the ultimate offline tactical mesh network. This site is built to be high-performance, mobile-first, and features real-time version tracking from the core app repository.

## 🚀 Features

- **Dynamic Auto-Fetch**: Automatically pulls the latest APK release, version number, and file size directly from the [KreoAssist App Repo](https://github.com/workbhaveshpandey-create/kreoassist).
- **Tactile UI**: Optimized for mobile with "Thumb-First" navigation and instant haptic-like feedback on touch.
- **Modern Stack**: Built with React, Tailwind CSS, Framer Motion, and Lucide Icons.
- **Glassmorphism**: High-end aesthetic with cyber-grid backgrounds and ambient glows.

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: GitHub REST API

## 📦 Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SGarryy/kreoassist-website.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## 🔗 Internal Architecture

The website uses a custom GitHub utility located in `src/lib/github.ts` to fetch releases. It is currently configured to track the production builds released by **Bhavesh Pandey**.

## 🛡️ Security

Communication via the KreoAssist app is encrypted using AES-256. This website serves as the secure gateway for distributing verified `.apk` builds.

---
**Developed by [Gaurav Singh]** 
*Part of the KreoDev Ecosystem*