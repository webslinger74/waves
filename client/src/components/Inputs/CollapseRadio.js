import React, { Component } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import  faAngleDown  from '@fortawesome/fontawesome-free-solid/faAngleDown';
import  faAngleUp  from '@fortawesome/fontawesome-free-solid/faAngleUp';


import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';






class CollapseRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            value:'0'
          }
    }

    componentDidMount(){
        if(this.props.initState){
            this.setState({
                ...this.state,
                open: this.props.initState
            })
      }
      console.log(this.state, "state after mounting");
    }
    renderList = () => (
        this.props.names ? 
        this.props.names.map(value => (
            <FormControlLabel 
                key={value._id}
                value={`${value._id}`}
                control={<Radio />}
                label={value.name}
                />
        )) : null      
    )

    handleChange = (event) => {
        console.log(event, "the event");
          this.setState({
            ...this.state,
            value: event.target.value
        })
        const priceRange = event.target.value;
        console.log(priceRange, "the price state");
    
    
        this.props.handleFilters(priceRange, this.props.title);
    }


    handleClick = () => {
        this.setState({
            ...this.state,
            open: !this.state.open
        })
    }

    render() {
        const { names } = this.props;
        
        return (
            <div>
                    <List style={{borderBottom:'1px solid #dbdbdb'}}>
              <ListItem onClick={this.handleClick} style={{
                  padding:'10px 23px 10px 0'
              }}>
              <ListItemText primary={this.props.title}
                    className="collapse_title" />
              
         {this.state.open ?   <FontAwesomeIcon 
               icon={faAngleUp} 
               /> :
               <FontAwesomeIcon 
               icon={faAngleDown} 
               />}
                  
                  </ListItem> 

            <Collapse
            in={this.state.open}
            timeout="auto"
            unmountOnExit
            > 
                 
                <List component="div" disablePadding>
               
                <RadioGroup 
                        aria-label="Prices"
                        name="prices"
                        value={this.state.value}
                     onChange={this.handleChange}
                    
                    
                    >
                    {this.renderList()};
                    </RadioGroup>
                </List>

            </Collapse> 


         
      </List> 
            </div>

          );
    }
}
 
export default CollapseRadio;