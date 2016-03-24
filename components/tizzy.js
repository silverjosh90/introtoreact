var React = require('react')
var ReactDOM = require('react-dom')


tableRows = [{
  id: 1,
  status: 'Open',
  Priority: 'P1',
  Owner: "Raven",
  Title: 'App Crashes On Open'
}]


var BugHeaders = React.createClass({
  render: function() {
    return(
      <thead>
      <tr>
      <th> Id </th>
      <th> Status </th>
      <th> Priority </th>
      <th> Owner </th>
      <th> Title </th>
      </tr>
      </thead>

    )
  }
})
var BugRows = React.createClass({
  render: function() {
    return(
      <tbody>
      <tr>
        <td> {this.props.children} </td>
        <td> Open </td>
        <td> P1 </td>
        <td> Ravan </td>
        <td> App crashes on open </td>
      </tr>
      </tbody>
    )
  }
})
var BugTable = React.createClass({
  render: function() {
    return(
      <table>
      <BugHeaders />
      <BugRows />

      </table>

    )
  }
})
var BugTitle = React.createClass({
  render: function() {
    return(
      <div>
      <h1> FIND THE BUG </h1>
      <h3> The smart way to find bugs </h3>
      </div>

    )
  }
})
var BugForm = React.createClass({
  render: function() {
    return(
      <div>
      </div>
    )
  }
})
var BugContainer = React.createClass({
  render: function() {
    return(
      <div>
      <BugTitle />
      <BugTable rows={this.props.rows} />
      </div>
    )
  }
})





ReactDOM.render(
  <BugContainer rows="tableRows" />,
  document.getElementById('content')

)
