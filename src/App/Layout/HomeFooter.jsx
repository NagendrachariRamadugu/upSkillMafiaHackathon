import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Byte Benders</p>
        <p style={styles.text}>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px 0',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    width: '1200px',
    borderTop: '2px solid rgba(0, 0, 0, 0.3)',
  },
  text: {
    margin: '5px',
    fontSize: '14px',
    color: '#666',
  },
}

export default Footer
