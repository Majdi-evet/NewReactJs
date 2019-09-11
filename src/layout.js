import {Router, Route, browserHistory} from 'react-router'
import Layout from './components/Layout'
// Import here all the required components used by the router such as SignIn, Register, ...

render(
    <Layout>
        <Router history={browserHistory}>
            <Route path="/" component={RT_Footer}>
            <Route path="/About Us" component={About}/>
            <Route path="/Terms & Conditions" component={TC}/>
            <Route path="/Register" component={Register}/>
          
        </Router>
    </Layout>