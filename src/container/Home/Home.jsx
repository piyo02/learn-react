import React, {Component} from 'react';
// import YouTubeComp from '../../component/YoutubeComp/YouTuberComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';


class Home extends Component {
    state = {
        showComponent: true
    }
    
    render() {
        return(
            <div>
                <p>Blog Post</p>
                <hr/>
                 <BlogPost/>
                {/* <p>YouTube Component</p>
                <hr/>

                <YouTubeComp 
                    time="7.12" 
                    title="Tutorial React JS - Part 1"
                    desc="1000x ditonton. 1 Minggu yang lalu"
                />
                <YouTubeComp 
                    time="13.55" 
                    title="Tutorial React JS - Part 2"
                    desc="1203x ditonton. 5 Hari yang lalu"
                />
                <YouTubeComp 
                    time="3.00" 
                    title="Tutorial React JS - Part 3"
                    desc="563x ditonton. 3 Hari yang lalu"
                />
                <YouTubeComp 
                    time="5.15" 
                    title="Tutorial React JS - Part 4"
                    desc="102x ditonton. 1 Hari yang lalu"
                />
                <YouTubeComp/>
                <p>Counter</p>
                <hr/>
                <Product/>
                <p>Life Cycle Component</p>
                <hr/>

                {
                    this.state.showComponent ? <LifeCycleComp/> : null
                }
                 */}
            </div>
        )
    }
}

export default Home;