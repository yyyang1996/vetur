export interface VLSConfig {
  vetur: {
    useWorkspaceDependencies: boolean;

    completion: {
      autoImport: boolean;
      scaffoldSnippetSources: {
        workspace: string;
        user: string;
        vetur: string;
      };
      tagCasing: 'initial' | 'kebab';
    };

    grammar: {
      customBlocks: {
        [lang: string]: string;
      };
    };

    validation: {
      template: boolean;
      style: boolean;
      script: boolean;
    };

    format: {
      enable: boolean;

      options: {
        tabSize: number;
        useTabs: boolean;
      };

      defaultFormatter: {
        html: 'prettyhtml' | 'none' | 'js-beautify-html' | 'prettier';
        css: 'prettier' | 'none';
        postcss: 'prettier' | 'none';
        scss: 'prettier' | 'none';
        less: 'prettier' | 'none';
        stylus: 'stylus-supremacy' | 'none';
        js: 'prettier' | 'none' | 'prettier-eslint' | 'vscode-typescript';
        ts: 'prettier' | 'none' | 'prettier-tslint' | 'vscode-typescript';
      };

      defaultFormatterOptions: {
        [formatter: string]: any;
      };

      styleInitialIndent: boolean;
      scriptInitialIndent: boolean;
    };

    trace: {
      server: 'off' | 'message' | 'verbose';
    };

    dev: {
      vlsPath: string;
      vlsPort: number;
      logLevel: 'INFO' | 'DEBUG';
    };

    experimental: {
      templateInterpolationService: boolean;
    };
  };
}

export const defaultVLSConfig: VLSConfig = {
  vetur: {
    useWorkspaceDependencies: false,

    completion: {
      autoImport: true,
      scaffoldSnippetSources: {
        workspace: '💼',
        user: '🗒️',
        vetur: '✌'
      },
      tagCasing: 'kebab'
    },

    grammar: {
      customBlocks: {
        docs: 'md',
        i18n: 'json'
      }
    },

    validation: {
      template: true,
      style: true,
      script: true
    },

    format: {
      enable: true,

      options: {
        tabSize: 2,
        useTabs: false
      },

      defaultFormatter: {
        html: 'prettyhtml',
        css: 'prettier',
        postcss: 'prettier',
        scss: 'prettier',
        less: 'prettier',
        stylus: 'stylus-supremacy',
        js: 'prettier',
        ts: 'prettier'
      },

      defaultFormatterOptions: {
        'js-beautify-html': {
          wrap_attributes: 'force-expand-multiline'
        },
        prettyhtml: {
          printWidth: 100,
          singleQuote: false,
          wrapAttributes: false,
          sortAttributes: false
        }
      },

      styleInitialIndent: false,
      scriptInitialIndent: false
    },

    trace: {
      server: 'off'
    },

    dev: {
      vlsPath: '',
      vlsPort: -1,
      logLevel: 'INFO'
    },

    experimental: {
      templateInterpolationService: false
    }
  }
};

export interface VLSFormatConfig {
  defaultFormatter: {
    [lang: string]: string;
  };
  defaultFormatterOptions: {
    prettier: any;
    [lang: string]: any;
  };
  scriptInitialIndent: boolean;
  styleInitialIndent: boolean;
  options: {
    tabSize: number;
    useTabs: boolean;
  };
}
