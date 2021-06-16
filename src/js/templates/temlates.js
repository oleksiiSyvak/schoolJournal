export function getStudentTemplate(
	{ id, name, surname, marks },
	studentsOrder,
) {
	let averageMark;

	if (marks[0]) {
		let marksSum = marks.reduce((acc, mark) => (acc += +mark), 0);

		averageMark = Math.ceil((marksSum / marks.length) * 10) / 10;
	}

	return `
	<div class="student" data-id=${id}>
        <p class="student__order">${studentsOrder}</p>
        <p class="student__name">${name} ${surname}</p>
        <p class="student__marks">${marks}</p>
        <p class="student__average">${averageMark ? averageMark : 0}</p>
        <div class="student__controls-block">
            <input
            type="number"
            name="markInput"
            id="markInput"
            class="student__mark-input"
            />
            <button
            type="submit"
            class="student__add-button"
            >Add mark</button>
            <button type="button" class="student__delete-button" id="studentDeleteButton">
            &#10005;
        </button>
        </div>
    </div>`;
}

export function getStudentEditionModalTemplate({ name, surname, marks }) {
	return `
    <section class="form-section" id="formContainer"> 
    <form class="student-form form" id="changingForm">
    <button type="button" class="form__close-button">&#10005;</button>
        <fieldset class="form-fieldset">
            <input
                type="text"
                class="form-input"
                id="studentName"
                placeholder="student\`s name"
                value=${name}
                name="name"
            /> 
            <input
                type="text"
                class="form-input"
                id="studentSurame"
                placeholder="student\`s surname"
                value=${surname}
                name="surname"
            />
            <input
                type="text"
                class="form-input"
                id="studentMarks"
                placeholder="marks (4,5,6,8...)"
                value=${marks[0] ? marks : 'empty'}
                name="marks"
            /> 
        </fieldset>
        <button type="submit" class="form-button" id="creationSubmitBtn">
            Submit
        </button>
    </form>
</section>`;
}

export function getGroupTemplate(group) {
	return `
    <div class="groups__group" data-id=${group.id}>
        <span>${group.name}</span>
        <button type="button" class="groups__delete-button" id="groupDeleteButton">
            &#10005;
        </button>
    </div>`;
}

export function getGroupInfoTemplate(averageMark, gropName) {
	return `
    <span>${gropName}</span>:
    <span>${averageMark}</span>
    `;
}

export const creationFormTemplate = `
    <section class="form-section" id="formContainer"> 
        <form class="group-form form" id="addingForm">
        <button type="button" class="form__close-button">&#10005;</button>
            <fieldset class="form-fieldset">
                <input
                    type="text"
                    class="form-input"
                    id="groupName"
                    placeholder="Enter group name"
                    name="groupName"
                />
 
            </fieldset>
            <button type="submit" class="form-button" id="creationSubmitBtn">
                Submit
            </button>
        </form>
    </section>`;

export const addStudentFormTemplate = `
    <section class="form-section" id="formContainer"> 
        <form class="student-form form" id="addingForm">
        <button type="button" class="form__close-button">&#10005;</button>
            <fieldset class="form-fieldset">
                <input
                    type="text"
                    class="form-input"
                    id="studentName"
                    placeholder="student\`s name"
                    name="name"
                /> 
                <input
                type="text"
                class="form-input"
                id="studentSurame"
                placeholder="student\`s surname"
                name="surname"
                />
                <input
                type="text"
                class="form-input"
                id="studentMarks"
                placeholder="marks (4,5,6,8...)"
                name="marks"
                /> 
            </fieldset>
            <button type="submit" class="form-button" id="creationSubmitBtn">
                Submit
            </button>
        </form>
    </section>`;

export const emptyInputError = `<p class="error-message">This input can\`t be empty</p>`;

export const marksError = `<p class="error-message">Enter only digits from 1 to 12 in a next format: 1,2,3,4,5...</p>`;

export const addStudentForbiddanceTemplate = `
    <section class="form-section" id="formContainer"> 
        <form class="form" id="confirmationForm">
        <button type="button" class="form__close-button">&#10005;</button> 
        <p class="form__confrimation-question">You should choose group before creating student</p> 
        </form>
    </section>`;

export const groupNameError = `<p class="error-message">name should includes one capital letter and number whithout white space (A2, B238, ...)</p>`;

export const groupNameNotUnique = `<p class="error-message">entered name already used</p>`;

export const groupDeletionConfirmation = `
<section class="form-section" id="formContainer"> 
<form class="form" id="confirmationForm">  
        <p class="form__confrimation-question">Are you sure?</p> 
    <button type="button" class="form__delete-button" id="deleteGroup">
        Delete
    </button>
    <button type="button" class="form__cancel-button" id="cancelButton">
        Cancel
    </button>
</form>
</section>`;
