export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}

// NOTE: Do Not Fetch an API Route from getStaticProps or getStaticPaths

export default function handler(req, res) {
    const email = req.body.email
    // Then save email to your database, etc...
  }