import React, { Component } from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import  faAngleDown  from '@fortawesome/fontawesome-free-solid/faAngleDown';
import  faAngleUp  from '@fortawesome/fontawesome-free-solid/faAngleUp';


import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';



class CollapseCheckBox extends Component {

    constructor(props){
        super(props)

       this.state = {
          open:false,
        checked: []
      }
    }
  

  componentDidMount(){
      if(this.props.initState){
          this.setState({
              open: this.props.initState
          })
      }

      

  }

  handleToggle = (value) => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      ...this.state,
      checked: newChecked
    });

  //  console.log(newChecked, "the collapse state");
  //  console.log(this.state.checked)

    this.props.handleFilters(newChecked, this.props.title)
  };

  handleClick = () => {
      this.setState({
          open: !this.state.open
      })
  }

  render() {
    
    const { names } = this.props;
    if(names){
  //  console.log(names, "this is the brands/woods")
    }
    return (

      <div className="collapse_items_wrapper">

   
                
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
              {names ? names.map((value) => (
                <ListItem key={value._id} style={{
                    padding:'10px 0'
                }}>
                
                  <ListItemText primary={value.name} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      color="primary"
                      onChange={() => this.handleToggle(value._id)}
                      checked={this.state.checked.indexOf(value._id) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))  : null}

            </Collapse> 


         
      </List>
      </div>
    );
  }
}


export default CollapseCheckBox;