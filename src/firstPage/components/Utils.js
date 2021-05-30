/* Не имею ни малейшего понятия, зачем нужна эта функция,
* но так как она есть в задании, то пускай будет.
* На данном этапе я полностью запутался...
*
* Поставим задачу.
* Пусть дана функция, преобразуюзая входной Array объектов в два объекта
* на вход подается изначальный массив tasks[], массив taskIds (ключ, по которым требуется преобразовать массив),
* id выходной для projectsById и имя самого project
* на выходе два объекта: projectsById (в котором будет только одно поле) и tasksById, преставленные массивом*/

export const normalizeState = (projectArray, tasksIdsInput, outputId, nameOfProject) => {

    let tasksById = {}
    let projectsById = {}

    for (const ind in tasksIdsInput) {
        tasksById[ind.toString()] = projectArray.find(it => it.id == tasksIdsInput[ind])
    }

    projectsById["outputId"] = {"id": outputId, "name": nameOfProject, "tasksIds": tasksIdsInput}

    return [tasksById, projectsById]
}