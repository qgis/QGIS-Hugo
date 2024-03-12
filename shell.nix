let
  nixpkgs = builtins.fetchTarball "https://github.com/NixOS/nixpkgs/archive/f9d39fb9aff0efee4a3d5f4a6d7c17701d38a1d8.tar.gz";
  pkgs = import nixpkgs { config = { }; overlays = [ ]; };
in
with pkgs;
mkShell {
  buildInputs = [
    hugo
    vscode
  ];
  # DIRENV_LOG_FORMAT to reduce direnv verbosity
  # See https://github.com/direnv/direnv/issues/68#issuecomment-162639262
  shellHook = ''
     export DIRENV_LOG_FORMAT=
     echo "-----------------------"
     echo "🌈 Your Hugo Dev Environment is ready."
     echo "It provides hugo and vscode for use with the QGIS Hugo Project"
     echo ""
     echo "🪛 VSCode:"
     echo "--------------------------------"
     echo "Start vscode like this:"
     echo ""
     echo "./vscode.sh"
     echo "-----------------------"
     echo "On running, it will install hugo related extensions."
     echo ""
     echo "🪛 Hugo:"
     echo "--------------------------------"
     echo "Start hugo like this:"
     echo ""
     echo "hugo server"
  '';
  postShellHook = ''
  '';
}
