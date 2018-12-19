workflow "workflow-test" {
  on = "push"
  resolves = ["action-test"]
}

action "action-test" {
  uses = "./"
  runs = ".github/action-test/entrypoint.sh"
}
