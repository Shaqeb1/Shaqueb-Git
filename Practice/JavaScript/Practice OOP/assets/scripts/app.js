//

class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }

    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }

  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const toolTipElement = document.createElement('div');
    toolTipElement.className = 'card';
    toolTipElement.textContent = 'Dummy';
    toolTipElement.addEventListener('click', this.closeToolTip);
    this.element = toolTipElement;
  }
}

//
class ProjectItem {
  hasActiveToolTip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
  }

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);

    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.addEventListener('click', this.updateProjectListsHandler);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    this.updateProjectListsHandler.bind(null, this.id);
  }

  update(updateProjectListFunction, type) {
    this.updateProjectListsHandler = updateProjectListFunction;
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) {
      return;
    }

    const tooltip = new Tooltip(() => {
      this.hasActiveToolTip = false;
    });

    tooltip.attach();
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfo = projectItemElement.querySelector('button:first-of-type');
    moreInfo.addEventListener('click', this.showMoreInfoHandler);
  }
}

//
class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;

    const projectItems = document.querySelectorAll(`#${type}-projects li`);

    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(
          projectItem.id,
          this.switchProject.bind(this),
          this.type
        )
      );
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = setSwitchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-project ul `);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

//
class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
  }
}

App.init();
