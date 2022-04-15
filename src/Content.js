import React from 'react';

let listItems = [
    { 
        'link': 'React Tutorial',
        'url': 'https://www.youtube.com/watch?v=bMknfKXIFA8&list=PLjyVhPXqFkgT58Z6LX3pb_YnAhfHAPFaw&index=6&t=1045s',
    },
    { 
        'link': 'React Home Page',
        'url': 'https://reactjs.org/',
    },
    { 
        'link': 'NPM Home Page',
        'url': 'https://www.npmjs.com/',
    },
    { 
        'link': 'React Installation/Upgrade',
        'url': 'https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis',
    }
];

const Content = () => {
    return (
        <div className="primary-content">
            <h1>React Resources</h1>
            <ul>
                {listItems.map((item, index) => {
                    return <li key={index}>
                        <a href={item.url}>{item.link}</a>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Content;