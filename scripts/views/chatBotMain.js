const chatBotMain = document.createElement('div');

chatBotMain.setAttribute('id', 'chatBotMain');
chatBotMain.className = 'chatBot-main';
chatBotMain.innerHTML = `<span id="close" class="close">x</span>
                            <div id='chatContent' style="flex-direction: column">
                                <h3>DO YOU WANT A CALLBACK ?</h3>
                                <span>Please give us your details and we will get back to you.</span>
                                <form id="chatBot-form">
                                    <select class="form" id="chatBot-select">
                                        <option value="I'm Interested in Content">I'm Interested in Content</option>
                                        <option value="I'm Interested in Design">I'm Interested in Design</option>
                                    </select>
                                    <input class="form" id="chatBot-email" type="hidden" placeholder="email">
                                    <input class="form" id="chatBot-phone" type="text" placeholder="phone" required>
                                    <input class="form" id="chatBot-name" type="text" placeholder="name" required>
                                    <button id="chatBot-submit" type="submit" class="chatBot-main-submit">Call Now</button>
                                </form>
                            </div>
                            <div id="thankContent" style="display: none; flex-direction: column">
                                <h3>Thanks You for Your Submit</h3>
                                <button id="thankContentSubmit" type="submit" class="chatBot-main-submit">Get a Callback</button>
                            </div>
                        `;

export default chatBotMain;
