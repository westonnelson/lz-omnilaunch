import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for user profiles and deployments
const users = {};
const deployments = {};

app.post('/api/users', (req, res) => {
  const { address } = req.body;
  if (!users[address]) {
    users[address] = { address, deployments: [] };
  }
  res.json(users[address]);
});

app.get('/api/users/:address/deployments', (req, res) => {
  const { address } = req.params;
  const user = users[address];
  if (user) {
    res.json(user.deployments);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/api/deployments', (req, res) => {
  const { address, deployment } = req.body;
  const user = users[address];
  if (user) {
    const deploymentId = Date.now().toString();
    deployments[deploymentId] = { ...deployment, id: deploymentId };
    user.deployments.push(deploymentId);
    res.json(deployments[deploymentId]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});