import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardTitle, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="project-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>
                        Quote Generator
                    </CardTitle>
                    <CardText>
                        This is the FreeCodeCamp Quote Generator project using React
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    
                </Card>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="project-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/1251/posts/30113/preview_image/angular-logo.jpg) center / cover'}}>
                        Simon Game
                    </CardTitle>
                    <CardText>
                        This is the FreeCodeCamp Simon Game project using Angular
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/1251/posts/30113/preview_image/angular-logo.jpg) center / cover'}}>
                        Wikipedia API
                    </CardTitle>
                    <CardText style={{fontSize: '10px', fontStyle: 'bold'}}>
                        This is the FreeCodeCamp Wikipedia API project using Angular
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    
                </Card>
            </div>

            
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab id="tab-color">React</Tab>
                    <Tab id="tab-color">Angular</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;