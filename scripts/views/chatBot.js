let chatBot = document.createElement('div');

chatBot.setAttribute('id', 'chatBot');
chatBot.className = 'chatBot';
chatBot.style.display = 'flex';
chatBot.style.width = '400px';
chatBot.style.height = '90px';
chatBot.style.zIndex = '3';
chatBot.style.backgroundImage = "url('../../assets/mini.png')";
chatBot.style.backgroundPositionY = '-15px';
chatBot.style.objectFit = 'fill';
chatBot.style.cursor = 'pointer';
chatBot.style.transition = 'all 0.3s ease';

export default chatBot;
