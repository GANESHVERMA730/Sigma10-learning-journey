#  Lottery Game (React)

A simple lottery game built using React. Players get a random ticket, and if the sum of numbers matches the winning sum, they win!

---

##  Features

- Generate random lottery tickets
- Dynamic ticket rendering
- Win condition based on sum of numbers
- Simple and clean UI

---

## Tech Stack

- React (Vite)
- JavaScript
- CSS

---

## Project Structure


src/
├── components/
│ ├── lottery/
│ │ ├── Lottery.jsx
│ │ ├── Lottery.css
│ │ ├── helper.js
│ │
│ ├── ticket/
│ │ ├── Ticket.jsx
│ │ ├── Ticket.css
│ │ ├── TicketNum.jsx
│ │ ├── TicketNum.css
│
├── App.jsx
├── main.jsx


---

##  How to Run

```bash
npm install
npm run dev

Then open:

http://localhost:5173/
 
Game Rule
A ticket contains random numbers
If sum of numbers = winning sum → 🎉 You win!
Click "Buy New Ticket" to generate a new ticket

Built while learning React fundamentals 😁