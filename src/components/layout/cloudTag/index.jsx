import React from 'react'
import TagCloud from 'TagCloud'
import PropTypes from 'prop-types';
class CloudTag extends React.PureComponent{
    static propTypes={
        data:PropTypes.object,
        history:PropTypes.object
    }
    componentDidMount(){
        const container = '#tagcloud';
        const texts=this.props.data?.allMarkdownRemark?.group.map(element => {
            return element?.fieldValue
        });
        const options = {
        };
        const tc=TagCloud(container, texts, options);
				console.log(this.props.location);
        tc?.items.forEach((ele)=>{
            console.log(ele.el.innerText);
            const a = document.createElement('a');
            // if(document.domain === 'localhost'){
            //     a.setAttribute('href', `${this.props.location.href}${ele.el.innerText}`);
            // }else{
            //     a.setAttribute('href', `${this.props.location.href}Charging/tags/${ele.el.innerText}`);
            // }
						a.setAttribute('href', `${window.location.href}tags/${ele.el.innerText}`);
            a.textContent = ele.el.innerText;
            ele.el.textContent=''
            ele.el.appendChild(a);
        })
        
    }
    render() {
        return <div id='tagcloud'/>;
      }
}
export default  CloudTag