class Anagram:
    @staticmethod
    def is_anagram(a, b):
        a_arr = list(a)
        b_arr = list(b)

        a_len = len(a_arr)
        b_len = len(b_arr)

        if (a_len != b_len):
            return False

        occ_dic = dict(zip(list(set(a)), [0]*a_len))

        for c in a_arr:
            occ_dic[c] += 1

        for c in b_arr:
            if c not in occ_dic:
                return False
            occ_dic[c] -= 1

        diff = list(filter(lambda n: n != 0, occ_dic.values()))
        return not diff
