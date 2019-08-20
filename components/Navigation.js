function linkBuilder(links){
    return links
        .map(function linkLister(link){
            return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;
        })
        .join(' ');
}
    
export default function(state){
    return `
    <nav>
      <ul>
        ${linkBuilder(state.links.primary)}
    </ul>
    </nav>
    `;
}
    