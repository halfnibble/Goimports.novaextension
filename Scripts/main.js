exports.activate = function () {
  // Do work when the extension is activated
  console.info("Reticulating splines.");
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
};

function runGoimports(editor) {
  const filepath = editor.document.path;
  console.info(filepath);

  const options = {
    args: ["goimports", "-w", filepath],
  };

  const process = new Process("/usr/bin/env", options);

  process.onStdout((output) => console.info(`stdout: ${output}`));

  process.onStderr((err) => console.error(`stderr: ${err}`));

  process.onDidExit((status) => {
    console.log(`Goimports exited with code: ${status}`);
  });

  process.start();
}

nova.commands.register("goimports.runGoimports", runGoimports);
