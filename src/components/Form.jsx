import React, { Component } from 'react';

class BananaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputYear:  '2017',
            inputMonth: '1'
        };

        this.data = {
            "person": {
                "weekday": 50,
                "weekend": 70
            },
            "group": {
                "weekday": 40,
                "weekend": 45
            }
        };

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        this.createSelectedItems();
    }

    createSelectedItems() {
        let items = [];
        let daysInMonth = new Date(this.state.inputYear, this.state.inputMonth, 0).getDate();
        for(let i = 1; i <= daysInMonth; i++) items.push(<option key={i} value={i}>{i}</option>);
        return items;
    }

    render() {
        return (
            <form id="calcPrice">
                <div className="row">
                    <div className="large-12 columns">
                        <h1 className="text-center subheader">Регистрация на всемирную выставку новых сортов бананов</h1>
                    </div>
                </div>

                <fieldset className="row">
                    <legend>Дата</legend>
                    <div className="large-4 columns">
                        <label>Год
                            <select id="inputYear" value={this.state.inputYear} onChange={this.onSelectChange}>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                            </select>
                        </label>
                    </div>

                    <div className="large-4 columns">
                        <label>Месяц
                            <select id="inputMonth" value={this.state.inputMonth} onChange={this.onSelectChange}>
                                <option value="1">Январь</option>
                                <option value="2">Февраль</option>
                                <option value="3">Март</option>
                                <option value="4">Апрель</option>
                                <option value="5">Май</option>
                                <option value="6">Июнь</option>
                                <option value="7">Июль</option>
                                <option value="8">Август</option>
                                <option value="9">Сентябрь</option>
                                <option value="10">Октябрь</option>
                                <option value="11">Ноябрь</option>
                                <option value="12">Декабрь</option>
                            </select>
                        </label>
                    </div>

                    <div className="large-4 columns">
                        <label>Дата
                            <select id="inputDate">
                                { this.createSelectedItems() }
                            </select>
                        </label>
                    </div>
                </fieldset>


                <fieldset className="row">
                    <legend>Сколько вы хотите зарегистрировать обезьян?</legend>
                    <div className="large-12 columns">
                            <label> </label>
                            <input className="current_" type="radio" defaultChecked="checked" name="typeOrder" value="personOrder" id="typePerson" />
                            <label htmlFor="typePerson">До 10 обезьян (Индивидуальная)</label>
                            <input type="radio" name="typeOrder" value="groupOrder" id="typeGroup" />
                            <label htmlFor="typeGroup">От 10 обезьян (Групповая)</label>
                    </div>
                    <div className="large-12 columns">
                        <table id="showCurrentPrice">
                            <thead>
                            <tr>
                                <th> </th>
                                <th>Будни</th>
                                <th>Выходные</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="person_row">
                                <td>Индивидуальная</td>
                                <td className="weekday_ price_">
                                    { this.data.person.weekday }
                                </td>
                                <td className="weekend_ price_">
                                    { this.data.person.weekend }
                                </td>
                            </tr>
                            <tr className="group_row">
                                <td>Групповая</td>
                                <td className="weekday_ price_">
                                    { this.data.group.weekday }
                                </td>
                                <td className="weekend_ price_">
                                    { this.data.group.weekend }
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default BananaForm;