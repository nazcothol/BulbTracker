function linkBuilder(links){
    return links
        .map(function linkLister(link){
            return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;
            //if link ="home", output icon, media qu css hide word, hide icon,
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
    