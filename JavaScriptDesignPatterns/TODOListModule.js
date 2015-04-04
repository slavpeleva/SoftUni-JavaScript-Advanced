
var Container = function(name){
    var _name = name;
    var _sections = [];

    function addSection(title, containerPossition){
        var section = new Section(title);
        _sections.push(section);
        section.addToDOM(containerPossition);

    }

    function addToDOM() {
        var container = document.createElement('div');
        container.setAttribute('id', containers.length - 1);
        container.style.border = '1px solid black';
        container.style.width = '400px';
        container.style.textAlign = 'center';
        var title = document.createTextNode(_name + ' TODO List');
        var titleHolder = document.createElement('h1');
        var sectionHolder = document.createElement('div');
        sectionHolder.setAttribute('id', (containers.length -1) + '_sections');
        sectionHolder.style.border = '1px solid black';
        sectionHolder.style.width = '98%';
        sectionHolder.style.textAlign = 'center';
        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', containers.length + '_title');
        var inputButton = document.createElement('input');
        inputButton.setAttribute('type', 'button');
        inputButton.setAttribute('onClick', 'containers[' +
        (containers.length - 1) + '].addSection(document.getElementById(\'' +
        (containers.length + '_title') + '\').value, ' + (containers.length - 1) + ')');
        inputButton.setAttribute('value', 'Add Section');

        titleHolder.appendChild(title);
        container.appendChild(titleHolder);
        container.appendChild(sectionHolder);
        container.appendChild(inputText);
        container.appendChild(inputButton);
        document.body.appendChild(container);

    }

    return {
        addToDOM: addToDOM,
        addSection: addSection,
        sections: _sections

    }
};

var Section = function(title){
    var _title = title;
    var _items = [];

    function addItem(content, containerPossition, sectionPosition){
        var item = new Item(content);
        _items.push(item);
        item.addToDOM(containerPossition, sectionPosition);



    }
                           // 0
    function addToDOM(containerPossition) {
        var sectionUniqueId = containerPossition + '_' + (containers[containerPossition].sections.length-1);
        var sectionPosition = (containers[containerPossition].sections.length-1);
        var section = document.createElement('div');
        section.setAttribute('id', sectionUniqueId);
        section.style.border = '1px solid black';
        section.style.width = '400px';
        section.style.textAlign = 'center';


        var titleText = document.createTextNode(_title);
        var titleHolder = document.createElement('h2');
        titleHolder.appendChild(titleText);
        section.appendChild(titleHolder);

        var itemHolder = document.createElement('div');
        itemHolder.setAttribute('id', sectionUniqueId + '_items');
        section.appendChild(itemHolder);

        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', sectionUniqueId + '_content');
        var sectionButton = document.createElement('input');
        sectionButton.setAttribute('type', 'button');
        sectionButton.setAttribute('value', '+');
        sectionButton.setAttribute('onclick', 'containers[' + containerPossition + '].sections[' + sectionPosition + ']' +
        '.addItem(document.getElementById(\'' + (sectionUniqueId + '_content') + '\').value,  ' + containerPossition +',' + sectionPosition + ')');
        section.appendChild(input);
        section.appendChild(sectionButton);
        document.getElementById(containerPossition + '_sections').appendChild(section);
    }

    return {
        addToDOM: addToDOM,
        addItem: addItem,
        items: _items
    }
};

var Item = function (content) {
    var _content = content;
    var _status = false;

    function addToDOM(containerPossition, sectionPosition) {
        var itemPosition = containers[containerPossition].sections[sectionPosition].items.length-1;
        var itemUniqueId = containerPossition + '_' + sectionPosition + '_' + itemPosition;
        var item = document.createElement('div');
        item.setAttribute('id', itemUniqueId);
        item.style.borderBottom = '1px solid black';
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', itemUniqueId + '_checkbox');
        checkBox.setAttribute('onclick', 'containers[' + containerPossition + '].sections[' + sectionPosition + '].items['
        + itemPosition + '].switchStatus(' + containerPossition + ',' + sectionPosition + ',' + itemPosition + ')');
        checkBox.style.float = 'left';
        var contentBox = document.createElement('div');
        contentBox.setAttribute('id', itemUniqueId + '_content');
        var text = document.createTextNode(_content);
        item.appendChild(checkBox);
        contentBox.appendChild(text);
        item.appendChild(contentBox);
        document.getElementById(containerPossition + '_' + sectionPosition + '_items').appendChild(item);


    }

    function switchStatus(containerPossition, sectionPosition, itemPosition) {
        _status = !_status;
        var itemUniqueId = containerPossition + '_' + sectionPosition + '_' + itemPosition;
        if(_status){
            document.getElementById(itemUniqueId + '_content').style.backgroundColor = 'green';
        }
        else{
            document.getElementById(itemUniqueId + '_content').style.backgroundColor = 'white';
        }
    }

    return {
        addToDOM: addToDOM,
        switchStatus: switchStatus
    }
};

var containers = [];
function addContainer(name) {
    var container = new Container(name);
    containers.push(container);
    container.addToDOM();



}
