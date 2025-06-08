
### 📄 `README.md`

```markdown
# Skip Selector Redesign – WeWantWaste

This is a complete redesign of the **"Choose Your Skip Size"** page from [wewantwaste.co.uk](https://wewantwaste.co.uk), rebuilt using **React + TypeScript + TailwindCSS** for improved code quality, UX, and mobile responsiveness.

---

## 🚀 Objective

✅ Rebuild the page in React, keeping all core functionality but with:

- A fresh, modern and accessible UI
- Clean and maintainable code structure
- Responsive layout for mobile and desktop
- Dynamic data fetching from a public API
- Visual feedback when a skip is selected

---

## 🧩 Tech Stack

- **React** (with Vite and TypeScript)
- **Tailwind CSS** for styling
- **Axios** for data fetching
- API used:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

---

## 📦 Project Structure

```

src/
├── App.tsx                # Main entry point
├── components/
│   ├── SkipList.tsx       # Handles fetching & listing skips
│   └── SkipCard.tsx       # Visual representation of a skip
├── types/
│   └── skip.ts            # TypeScript interface for Skip data

````

---

## 💡 Approach

- On load, `SkipList` fetches data from the `by-location` API using Axios.
- The response is strictly typed via a custom `Skip` interface.
- Each skip is rendered via the `SkipCard` component, displaying:
  - Skip size, hire period, pre-VAT price, total price, and road eligibility
- A selected skip is highlighted with a green border and "Selected ✓" button
- Road-ineligible skips are marked with a red warning tag
- Grid layout is responsive using Tailwind’s `grid-cols` utilities
- Includes full loading / error / empty state handling

---

## 🧪 Running Locally

```bash
npm install
npm run dev
````

Visit [http://localhost:5173](http://localhost:5173) to see the live preview.

---

## 🆚 Improvements Over Original

| Feature        | Original Page | React Redesign                |
| -------------- | ------------- | ----------------------------- |
| Code structure | Unknown       | Modular & typed               |
| UX             | Functional    | Visual, guided experience     |
| Selection      | Basic         | Clear visual state feedback   |
| Accessibility  | Minimal       | Icons, colors, clarity        |
| Responsiveness | Yes           | Optimized layout via Tailwind |
