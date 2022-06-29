// ==UserScript==
// @name     				Antispam Prot
// @version  				1
// @match						https://discord.com/channels/477797909832925195/*
// ==/UserScript==

let delElements = [];

setInterval(_=>
{
  if(location.href.startsWith(`https://discord.com/channels/477797909832925195`))
  {
    //console.log("this is working Clueless");
    try
    {
      let DEL = false;
      chat = document.querySelectorAll(".scrollerInner-2PPAp2")[0];
      //console.log(chat);
      chat.childNodes.forEach( msg =>
                                                                                      {
        if(msg.innerHTML.includes("204255221017214977") && msg.style.display != "none")
        {
          //console.log(msg);
          msg.style.display = "none"
          delElements.push(msg);
          DEL = true;
        }
      });
      if(DEL) console.log(`Invisible Elements: ${delElements.length}`);
    }
    catch(e)
    {
      //console.log("Aware");
      //console.error(e);
    }
  }
}, 1000)
