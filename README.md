<h1>Custom Slicer for Power BI</h1>
<p>This repository contains a custom slicer visual for Power BI, developed using React.js and the <code>pbiviz</code> library. This slicer limits the number of selections and enhances the user experience by providing a more controlled and customized selection process.</p>
<h2>Features</h2>
    <ul>
        <li><strong>Custom Selection Limit</strong>: Restrict the number of items that can be selected in the slicer.</li>
        <li><strong>React.js Integration</strong>: Built using React.js.</li>
        <li><strong>Power BI Visualization Tools (<code>pbiviz</code>)</strong>: Utilizes the <code>pbiviz</code> library for seamless integration with Power BI.</li>
    </ul>

<h2>Getting Started</h2>
<h3>Prerequisites</h3>
    <p>Ensure you have the following tools installed on your development machine:</p>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a></li>
        <li><a href="https://www.npmjs.com/">npm</a></li>
        <li><a href="https://www.npmjs.com/package/powerbi-visuals-tools">Power BI Visual Tools (<code>pbiviz</code>)</a>            </li>
        <li><a href="https://learn.microsoft.com/en-us/power-bi/developer/visuals/environment-setup">For More Detail</a></li>
    </ul>

<h3>Installation</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/sauurabh/Custom-Slicer.git
cd Custom-Slicer</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
    </ol>

<h3>Development</h3>
    <p>To start the development server, run:</p>
    <pre><code>pbiviz start</code></pre>
    <p>This will build the visual and start a local server. You can then add the visual to your Power BI report by importing it as a custom visual.</p>

  <h3>Building for Production</h3>
    <p>To create a production build, run:</p>
    <pre><code>pbiviz package</code></pre>
    <p>This will generate a <code>.pbiviz</code> file in the <code>dist</code> directory, which can be imported into Power BI.</p>

  <h2>Usage</h2>
    <ol>
        <li>Import the <code>.pbiviz</code> file into your Power BI report. (Inside<code> Custom-Slicer/Dist</code>)</li>
        <li>Add the custom slicer visual to your report.</li>
        <li>Configure the slicer settings as needed, including the maximum number of selectable items.</li>
    </ol>

  <h2>Project Structure</h2>
    <ul>
        <li><code>src/</code>: Contains the source code for the custom slicer.
            <ul>
                <li><code>CustomSlicer.tsx/</code>: React component.</li>
                <li><code>Setting.ts/</code>:
                The settings.ts file is used to define and manage the settings for your visual. These settings are configurable by the user through the Power BI interface                    and allow customization of the visual's appearance and behavior</li>
                <li><code>visual.ts</code>:
                The visual.ts file is the main entry point for your custom visual. It defines the behavior of the visual, including how it renders, updates, and interacts                     with the data.</li>
                <li><code>transformData.ts</code>: Extracting Data from Dataview object </li>
          </ul>
        </li>
        <li><code>style/</code>:CSS and styling files.
            <ul>
                <li><code>visual.less/</code>: styling file</li>
            </ul>
      <li><code>capabilities.json/</code>:
      The capabilities.json file defines the metadata and capabilities of your visual. It describes what kind of data the visual expects and how it can be configured. This         file typically includes:
        <ul>DataViewMappings: Specifies how the data should be structured and mapped to the visual.</ul>
        <ul>Objects: Defines the customizable properties that appear in the Power BI format pane.</ul>
        <ul>DataRoles: Describes the different roles the data fields can play (e.g., Category, Measure).</ul>
        <ul>DataViewKinds: Indicates the types of data views the visual can handle (e.g., Table, Matrix).</ul>
        <ul>SupportsHighlight: Specifies whether the visual supports data highlighting.</ul></li>
      <li><code>assets/</code>: Static assets such as images and icons.</li>
      <li><code>dist/</code>: Directory where the built visual is output.</li>
      <li><code>package.json</code>: Project configuration and dependencies.</li>
      <li><code>tsconfig.json</code>: TypeScript configuration.</li>
    <h2>Sample</h2>
    <h4>If maxSelection value is "n",then it will allow user to select options less than or equal to "n"</h4>
    <img src="https://github.com/user-attachments/assets/6c3dd973-82cb-4c58-a7b1-640198d7e7cb">
    <img src="https://github.com/user-attachments/assets/05851d6b-4de1-46b5-a7f8-a0b563cb6f0b">


  <h2>Contributing</h2>
    <p>Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.</p>
    
  <h2>Contact</h2>
    <p>For any questions or support, please contact <a href="mailto:your-email@example.com">saurabhss1210@gmail.com</a>.</p>
