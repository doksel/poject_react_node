import React from 'react';
import Main from "./main/main";
import About from "./about/about";
import News from "./news/news";
import Contacts from "./contacts/contacts";
import login from "./login/login";

import { Route } from "react-router-dom";

let Content = (props) => {
    return(
    <div className="content">
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        {/* <Route path="/news" render ={()=><News />} /> */}
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={login} />
    </div>
    )
}
export default Content;