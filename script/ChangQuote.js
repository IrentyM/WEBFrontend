const messages = [
  "7 Milestones from 50 Years of BMW M History",
  'Sheer Driving Pleasure',
  'You can stick a BMW badge on a dead cat - and people would still buy it.',
  "A BMW can't take you as far as a diploma.",
  "I don't have anything against commercials, and I really like BMWs.",
  "It is interesting that the black BMW is the preferred car of so many assholes."
];

let currentMessageIndex = 0;

document.getElementById('change-text-btn').addEventListener('click', () => {
  const message = document.getElementById('changetext');
  
  message.textContent = messages[currentMessageIndex];
  
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});
