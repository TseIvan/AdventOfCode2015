#include <iostream>
#include <fstream>
#include <string>
#include <regex>
#include <map>
#include <set>
using namespace std;

void partOne(multimap<string,string>& replacements, string& original_molecule) {
  set<string> unique;
  string molecule = original_molecule, modified_molecule, substring;
  long int molecule_size = molecule.size();

  for(auto it = replacements.begin(); it != replacements.end(); ++it) {
    substring = it->first;
    for (string::size_type i = 0; i < molecule_size; i++) {
      if (molecule.substr(i, substring.size()) == substring) {
        modified_molecule = molecule.substr(0,i) + it->second + molecule.substr(i+substring.size(), molecule_size);
        unique.insert(modified_molecule);
      }
    }
  }

  cout << unique.size() << endl;
  // for (auto um: unique) {
  //   cout << um << endl;
  // }
}

int main()  {
  ifstream infile("day19.txt");
	string line, molecule;
	regex re("(.*) => (.*)");
	smatch match;
  multimap<string,string> replacements;

  while (getline(infile, line)) {
    if (regex_search(line, match, re)) {
      replacements.insert(pair<string,string>(match[1], match[2]));
    } else if (line.length() > 1) {
      molecule = line;
    }
  }
  partOne(replacements, molecule);
  return 0;
}

