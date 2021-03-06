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
}

void partTwo(multimap<string,string>& inverted_replacements, string& original_molecule) {
  int steps = 0;
  string target = "e";
  string molecule = original_molecule;
  while (molecule != target) {
    for(auto it = inverted_replacements.begin(); it != inverted_replacements.end(); ++it) {
      auto pos = molecule.find(it->first, 0);
      if (pos != string::npos) {
          molecule.replace(pos, it->first.size(), it->second);
          steps++;
      }
    }

    if (steps > 50000) {
      cout << "Requires multimap to be shuffled, current order applied greedily does not work" << endl;
      break;
    }
  }
  cout << steps << endl;
}

int main()  {
  ifstream infile("day19.txt");
	string line, molecule;
	regex re("(.*) => (.*)");
	smatch match;
  multimap<string,string> replacements, inverted_replacements;

  while (getline(infile, line)) {
    if (regex_search(line, match, re)) {
      replacements.insert(pair<string,string>(match[1], match[2]));
      inverted_replacements.insert(pair<string,string>(match[2], match[1]));
    } else if (line.length() > 1) {
      molecule = line;
    }
  }

  partOne(replacements, molecule);
  partTwo(inverted_replacements, molecule);
  return 0;
}

