#!/bin/bash

# Command file for Sphinx documentation

# Get the directory where the script is located
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Check if SPHINXBUILD is set, otherwise use default
if [ -z "$SPHINXBUILD" ]; then
    SPHINXBUILD="sphinx-build"
fi

# Set source and build directories
SOURCEDIR="source"
BUILDDIR="build"

# Check if no arguments are provided, then show help
if [ -z "$1" ]; then
    $SPHINXBUILD -M help $SOURCEDIR $BUILDDIR
    exit $?
fi

# Check if sphinx-build command is available
if ! command -v $SPHINXBUILD &> /dev/null; then
    echo "The '$SPHINXBUILD' command was not found. Make sure you have Sphinx installed,"
    echo "then set the SPHINXBUILD environment variable to point to the full path of the"
    echo "'sphinx-build' executable. Alternatively, you may add the Sphinx directory to PATH."
    echo ""
    echo "If you don't have Sphinx installed, grab it from http://sphinx-doc.org/"
    exit 1
fi

# Run the Sphinx build command
$SPHINXBUILD -M $1 $SOURCEDIR $BUILDDIR $SPHINXOPTS