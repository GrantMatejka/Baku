import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {Hoshi} from 'react-native-textinput-effects';

class HideShowPass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'visibility-off',
      isPassword: true
    };
  }

   getRef = (ref) => {
     if (this.props.getRef) {
       this.props.getRef(ref);
     }
   }

   changePwdType = () => {
     const {isPassword} = this.state;
     this.setState({
       icEye: isPassword ? 'visibility' : 'visibility-off',
       isPassword: !isPassword,
     });
   };

   render() {
     const {iconSize, iconColor, label, style} = this.props;
     const {icEye, isPassword} = this.state;

     return (
       <View style={style}>
         <Hoshi
           {...this.props}
           ref={this.getRef}
           secureTextEntry={isPassword}
           label={label} />
         <Icon style={styles.icon}
           name={icEye}
           size={iconSize}
           color={iconColor}
           onPress={this.changePwdType}
         />
       </View>
     );
   }
}


const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 33,
    right: 0
  }
});

HideShowPass.defaultProps = {
  iconSize: 25,
  label: 'Password',
  iconColor: '#222222'
};

HideShowPass.propTypes = {
  iconSize: PropTypes.number,
  label: PropTypes.string,
  iconColor: PropTypes.string
};

export default HideShowPass;
