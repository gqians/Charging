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
        // const texts = [
        //     '3D', 'TagCloud', 'JavaScript',
        //     'CSS3', 'Animation', 'Interactive',
        //     'Mouse', 'Rolling', 'Sphere',
        //     '6KB', 'v2.x',
        // ];
        const options = {
        };
        const tc=TagCloud(container, texts, options);
        tc?.items.forEach((ele)=>{
            console.log(ele.el.innerText);
            const a = document.createElement('a');
            if(document.domain === 'localhost'){
                a.setAttribute('href', `http://localhost:8000/tags/${ele.el.innerText}`);
            }else{
                a.setAttribute('href', `https://qian4321.github.io/Charging/tags/${ele.el.innerText}`);
            }
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