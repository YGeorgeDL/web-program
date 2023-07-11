import React, { Component } from 'react';
import NavBar from './navbar';
import Linux from './linux';
import Django from './django';
import Home from './home';
import Web from './web';
import WebContent from './webContent';
import NotFound from './notFound';
import { Routes, Route,Navigate } from 'react-router-dom';



class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/linux" element={<Linux />} >
                        <Route path="homework" element={<h4>homework的内容</h4>}></Route>
                        <Route path="terminal" element={<h4>terminal的内容</h4>}></Route>
                        <Route path="*" element={<h4>其他</h4>}></Route>
                    </Route>
                    <Route path="/django" element={
                            <div>
                                哈哈哈
                                <a href="/">返回首页</a>
                            </div>}/>
                    <Route path="/web" element={<Web />} />
                    <Route path="/web/content" element={<WebContent />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />}/>
                    </Routes>
                </div>
            </React.Fragment>
        )
    }
}
 
export default App;