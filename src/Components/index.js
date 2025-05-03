// TeluguMovieBookingApp.jsx
import React, { useState } from 'react';

// Telugu Movie Data (at least 5 per month for demo)
const movies = [
  // January
  {
    id: 1,
    title: 'RRR',
    poster: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
    month: 'March',
    price: 150,
  },
  {
    id: 2,
    title: 'Pushpa: The Rise',
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Pushpa_-_The_Rise_%282021_film%29.jpg',
    month: 'December',
    price: 120,
  },
  {
    id: 3,
    title: 'Baahubali: The Beginning',
    poster: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Baahubali_The_Beginning_poster.jpg',
    month: 'July',
    price: 180,
  },
  {
    id: 4,
    title: 'Salaar',
    poster: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Salaar_2023_poster.jpg',
    month: 'September',
    price: 160,
  },
  {
    id: 5,
    title: 'Magadheera',
    poster: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Magadheera_Poster.jpg',
    month: 'July',
    price: 140,
  },
  {
    id: 6,
    title: 'Arjun Reddy',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Arjun_Reddy.jpg',
    month: 'August',
    price: 130,
  },
  {
    id: 7,
    title: 'Ala Vaikunthapurramuloo',
    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Ala_Vaikunthapurramuloo_poster.jpg',
    month: 'January',
    price: 150,
  },
  {
    id: 8,
    title: 'Sye',
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Sye_Poster.jpg',
    month: 'September',
    price: 110,
  },
  {
    id: 9,
    title: 'Manam',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/79/Manam_poster.jpg',
    month: 'May',
    price: 120,
  },
  {
    id: 10,
    title: 'Geetha Govindam',
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Geetha_Govindam_poster.jpg',
    month: 'August',
    price: 130,
  },
  {
    id: 11,
    title: 'Eega',
    poster: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Eega_poster.jpg',
    month: 'March',
    price: 100,
  },
  {
    id: 12,
    title: 'Fidaa',
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fidaa_poster.jpg',
    month: 'July',
    price: 120,
  },
  {
    id: 13,
    title: 'Jersey',
    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Jersey_poster.jpg',
    month: 'April',
    price: 140,
  },
  {
    id: 14,
    title: 'Mahanati',
    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Mahanati_poster.jpg',
    month: 'May',
    price: 150,
  },
  {
    id: 15,
    title: 'Sarileru Neekevvaru',
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Sarileru_Neekevvaru_poster.jpg',
    month: 'January',
    price: 160,
  },
  {
    id: 16,
    title: 'Uppena',
    poster: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Uppena_poster.jpg',
    month: 'February',
    price: 110,
  },
  {
    id: 17,
    title: 'Love Story',
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Love_Story_Telugu_poster.jpg',
    month: 'September',
    price: 130,
  },
  {
    id: 18,
    title: 'Vakeel Saab',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Vakeel_Saab_poster.jpg',
    month: 'April',
    price: 150,
  },
  {
    id: 19,
    title: 'Dear Comrade',
    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dear_Comrade_poster.jpg',
    month: 'July',
    price: 120,
  },
  {
    id: 20,
    title: 'Bheeshma',
    poster: 'htt'
  },

  // Repeat similar pattern for April through December...
];

// Seat Configuration
const seatRows = ['A', 'B', 'C', 'D'];
const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const TICKET_PRICE = 150;

export default function TeluguMovieBookingApp() {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookingDone, setBookingDone] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const filteredMovies = movies.filter(m => m.month === selectedMonth);

  const handleSeatClick = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const confirmBooking = () => {
    if (formData.name && formData.email && formData.phone && paymentMethod && selectedSeats.length > 0) {
      setBookingDone(true);
    } else {
      alert('Please fill all details, select seats, and choose payment method!');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Telugu Movie Booking</h1>

      {!selectedMovie && !bookingDone && (
        <>
          <select style={styles.select} value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <div style={styles.movieGrid}>
            {filteredMovies.length ? filteredMovies.map(movie => (
              <div key={movie.id} style={styles.movieCard} onClick={() => setSelectedMovie(movie)}>
                <img src={movie.poster} alt={movie.title} style={styles.poster} />
                <p>{movie.title}</p>
              </div>
            )) : <p>No movies this month.</p>}
          </div>
        </>
      )}

      {selectedMovie && !bookingDone && (
        <>
          <h2 style={styles.subTitle}>🎟️ Select Your Seats for {selectedMovie.title}</h2>
          <p style={styles.priceInfo}>🎫 Ticket Price: ₹{TICKET_PRICE} each</p>
          <div style={styles.seatLayout}>
            {seatRows.map(row =>
              seatNumbers.map(number => {
                const seat = row + number;
                const isSelected = selectedSeats.includes(seat);
                return (
                  <div
                    key={seat}
                    style={{
                      ...styles.seat,
                      backgroundColor: isSelected ? '#4caf50' : '#ccc'
                    }}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                );
              })
            )}
          </div>

          <h3 style={styles.subTitle}>💳 Fill Details</h3>
          <input style={styles.input} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
          <input style={styles.input} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormChange} />
          <input style={styles.input} type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleFormChange} />

          <h3 style={styles.subTitle}>💵 Payment Method</h3>
          <div style={styles.paymentMethods}>
            {['GPay', 'PhonePe', 'Paytm', 'Credit Card', 'Debit Card'].map(method => (
              <button
                key={method}
                style={{
                  ...styles.paymentButton,
                  backgroundColor: paymentMethod === method ? '#2196f3' : '#eee',
                  color: paymentMethod === method ? '#fff' : '#333'
                }}
                onClick={() => setPaymentMethod(method)}
              >
                {method}
              </button>
            ))}
          </div>

          <button style={styles.confirmButton} onClick={confirmBooking}>
            Confirm Booking
          </button>
        </>
      )}

      {bookingDone && (
        <div style={styles.successMessage}>
          <h2>✅ Booking Confirmed!</h2>
          <p><strong>Movie:</strong> {selectedMovie.title}</p>
          <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
          <p><strong>Total Price:</strong> ₹{selectedSeats.length * TICKET_PRICE}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Payment:</strong> {paymentMethod}</p>
        </div>
      )}
    </div>
  );
}

// 🎨 Internal CSS
const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
  title: { textAlign: 'center', marginBottom: '20px' },
  select: { width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' },
  movieGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
  movieCard: { width: '150px', cursor: 'pointer', textAlign: 'center' },
  poster: { width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' },
  subTitle: { marginTop: '20px' },
  priceInfo: { fontWeight: 'bold', margin: '10px 0' },
  seatLayout: { display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px', margin: '20px 0' },
  seat: { padding: '10px', backgroundColor: '#ccc', textAlign: 'center', borderRadius: '5px', cursor: 'pointer' },
  input: { width: '100%', padding: '10px', margin: '10px 0', fontSize: '16px' },
  paymentMethods: { display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' },
  paymentButton: { padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' },
  confirmButton: { marginTop: '20px', padding: '12px 20px', fontSize: '18px', backgroundColor: '#673ab7', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  successMessage: { textAlign: 'center', marginTop: '50px' }
};
