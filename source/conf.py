# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'RoboSense wiki'
copyright = '© RoboSense'
author = 'RoboSense'

# The full version, including alpha/beta/rc tags
release = '0.1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = ['myst_parser'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
language = 'en'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'sphinx_rtd_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
html_css_files = [
    'custom.css',
]
html_js_files = ['custom.js']

master_doc = 'index'

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'markdown',
    '.md': 'markdown',
}

html_theme_options = {
    'style_nav_header_background': '#e72420',
    'includehidden': False
}

# 配置源代码链接
html_context = {
    'display_github': True,  # 在页面上显示一个指向 GitHub 的链接
    'github_user': 'RoboSense-Robotics',  # GitHub 用户名
    'github_repo': 'robosense_ac_wiki_cn',  # GitHub 仓库名
    'github_version': 'master/',  # GitHub 中文档的路径（通常是分支名和docs文件夹）
    'conf_py_path': 'source/',  # conf.py 的路径，相对于 github_repo 的根目录
    'root_path_parts': 'product/',  # 示例
    'source_suffix': '.md',  # 示例
    'wiki_cn_url': 'https://robosense-wiki-cn.readthedocs.io/',  # wiki中文地址
    'wiki_en_url': 'https://robosense-wiki-en.readthedocs.io/',  # wiki英文地址
}
