import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YoutubeComp/YouTuberComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
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
            </Fragment>
        );
    }
}

export default YoutubeCompPage;