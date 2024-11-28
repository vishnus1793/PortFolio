import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/leetcode-stats', async (req, res) => {
  const username = 'vishnu1793';
  const query = `{
    matchedUser(username: "${username}") {
      problemsSolved: submitStatsGlobal {
        acSubmissionNum {
          count
        }
      }
    }
  }`;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'Origin': 'https://leetcode.com',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res.json(data.data.matchedUser.problemsSolved.acSubmissionNum[0].count);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
